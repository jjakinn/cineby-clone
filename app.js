// Cineby Clone - Fetches real data from Cineby's open API
const API_BASE = 'https://db.videasy.net/3';

// Image proxy used by Cineby
function getImageUrl(path, size = 'w500') {
    if (!path) return '';
    return `https://wsrv.nl/?url=https://image.tmdb.org/t/p/${size}${path}&output=webp&q=50&n=-1`;
}

// TMDB genre mapping
const genreMap = {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime',
    99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi',
    10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western',
    10759: 'Action & Adventure', 10762: 'Kids', 10763: 'News', 10764: 'Reality',
    10765: 'Sci-Fi & Fantasy', 10766: 'Soap', 10767: 'Talk', 10768: 'War & Politics'
};

// Fetch from Cineby API
async function fetchAPI(endpoint) {
    try {
        const res = await fetch(`${API_BASE}${endpoint}`);
        return await res.json();
    } catch (e) {
        console.error('API fetch failed:', e);
        return null;
    }
}

// Create card HTML
function createCard(movie, index, isTop10 = false) {
    const poster = getImageUrl(movie.poster_path, 'w342');
    const rankBadge = isTop10 ? `<span class="rank-badge">${String(index + 1).padStart(2, '0')}</span>` : '';
    const cardClass = isTop10 ? 'movie-card top10-card' : 'movie-card';
    const type = movie.media_type || (movie.first_air_date ? 'tv' : 'movie');
    const title = movie.title || movie.name;
    const year = (movie.release_date || movie.first_air_date || '').slice(0, 4);
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : '0.0';
    const displayType = type === 'tv' ? 'TV Show' : 'Movie';
    
    return `
        <div class="${cardClass}" data-id="${movie.id}" data-type="${type}" onclick="openPlayer({id: ${movie.id}, type: '${type}', title: '${title.replace(/'/g, "\\'")}', rating: '${rating}', year: '${year}', desc: '${(movie.overview || '').replace(/'/g, "\\'").slice(0, 200)}', poster: '${poster}'})">
            <div class="card-image">
                ${rankBadge}
                <img src="${poster}" alt="${title}" loading="lazy" onerror="this.src='https://via.placeholder.com/342x513/1a1a1a/666?text=${encodeURIComponent(title)}'">
                <div class="card-overlay">
                    <div class="play-overlay">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${title}</h3>
                <div class="card-meta">
                    <span class="card-rating">${rating}</span>
                    <span class="card-year">${year}</span>
                    <span class="card-type">${displayType}</span>
                </div>
            </div>
        </div>
    `;
}

// Render sections
function renderSection(containerId, movies, isTop10 = false) {
    const container = document.getElementById(containerId);
    if (!container || !movies) return;
    container.innerHTML = movies.slice(0, 10).map((movie, index) => createCard(movie, index, isTop10)).join('');
}

// Vidking Player URL builder
function getVidkingUrl(tmdbId, type = 'movie', season = 1, episode = 1) {
    if (type === 'tv') {
        return `https://www.vidking.net/embed/tv/${tmdbId}/${season}/${episode}?color=e50914&autoPlay=true`;
    }
    return `https://www.vidking.net/embed/movie/${tmdbId}?color=e50914&autoPlay=true`;
}

// Open player modal
function openPlayer(movie) {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('vidkingPlayer');
    const title = document.getElementById('detailTitle');
    const meta = document.getElementById('detailMeta');
    const desc = document.getElementById('detailDesc');
    
    const type = movie.type === 'tv' || movie.type === 'TV Show' ? 'tv' : 'movie';
    const url = getVidkingUrl(movie.id, type);
    
    iframe.removeAttribute('sandbox');
    iframe.src = url;
    title.textContent = movie.title;
    meta.innerHTML = `
        <span class="rating">${movie.rating}</span>
        <span class="year">${movie.year}</span>
        <span class="genre">${type === 'tv' ? 'TV Show' : 'Movie'}</span>
    `;
    desc.textContent = movie.desc || '';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close player modal
function closePlayer() {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('vidkingPlayer');
    
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = '';
}

// Initialize - fetch real data from Cineby API
async function init() {
    // Show loading state
    document.getElementById('top10').innerHTML = '<div class="loading">Loading...</div>';
    document.getElementById('trending').innerHTML = '<div class="loading">Loading...</div>';
    
    // Fetch all sections in parallel
    const [trending, popular, topRated, netflix] = await Promise.all([
        fetchAPI('/trending/all/day'),
        fetchAPI('/movie/popular'),
        fetchAPI('/movie/top_rated'),
        fetchAPI('/discover/movie?with_watch_providers=8&watch_region=US') // Netflix
    ]);
    
    // TOP 10 from trending
    if (trending?.results) {
        renderSection('top10', trending.results.slice(0, 10), true);
    }
    
    // Trending Today - movies only
    if (trending?.results) {
        const movies = trending.results.filter(m => m.media_type === 'movie');
        renderSection('trending', movies);
    }
    
    // Only on Netflix
    if (netflix?.results) {
        renderSection('netflix', netflix.results);
    }
    
    // Top Rated
    if (topRated?.results) {
        renderSection('toprated', topRated.results);
    }
    
    // Comedy - discover comedy movies
    const comedy = await fetchAPI('/discover/movie?with_genres=35');
    if (comedy?.results) {
        renderSection('comedy', comedy.results);
    }
    
    // Set hero from first trending item
    if (trending?.results?.[0]) {
        const hero = trending.results[0];
        updateHero(hero);
    }
    
    // Tab switching
    document.querySelectorAll('.tabs').forEach(tabGroup => {
        const tabs = tabGroup.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    });
    
    // Horizontal scroll with mouse wheel
    document.querySelectorAll('.row-scroll').forEach(row => {
        row.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                row.scrollLeft += e.deltaY;
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Modal close handlers
    document.getElementById('modalClose').addEventListener('click', closePlayer);
    document.getElementById('playerModal').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            closePlayer();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePlayer();
    });
}

// Update hero section with real movie data
function updateHero(movie) {
    const type = movie.media_type || (movie.first_air_date ? 'tv' : 'movie');
    const title = movie.title || movie.name;
    const year = (movie.release_date || movie.first_air_date || '').slice(0, 4);
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : '0.0';
    const backdrop = getImageUrl(movie.backdrop_path, 'original');
    const poster = getImageUrl(movie.poster_path, 'w500');
    
    // Update hero background
    const heroImg = document.querySelector('.hero-img');
    if (heroImg && backdrop) {
        heroImg.src = backdrop;
    }
    
    // Update hero content
    const heroTitle = document.querySelector('.hero-title');
    const heroMeta = document.querySelector('.hero-meta');
    const heroDesc = document.querySelector('.hero-desc');
    const playBtn = document.querySelector('.hero .btn-play');
    
    if (heroTitle) heroTitle.textContent = title.toUpperCase();
    if (heroMeta) {
        const genres = (movie.genre_ids || []).slice(0, 2).map(id => genreMap[id] || '').filter(Boolean);
        heroMeta.innerHTML = `
            <span class="rating">${rating}</span>
            <span class="year">${year}</span>
            ${genres.map(g => `<span class="genre">${g}</span>`).join('')}
        `;
    }
    if (heroDesc) heroDesc.textContent = movie.overview || '';
    
    // Update play button to open this movie
    if (playBtn) {
        playBtn.onclick = () => openPlayer({
            id: movie.id,
            type: type,
            title: title,
            rating: rating,
            year: year,
            desc: movie.overview || '',
            poster: poster
        });
    }
}

// Loading styles
const style = document.createElement('style');
style.textContent = `
    .loading {
        color: var(--text-muted);
        padding: 40px;
        text-align: center;
        font-size: 14px;
    }
`;
document.head.appendChild(style);

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);