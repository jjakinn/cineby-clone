// Vivid Movies - Fetches real data from Cineby's open API
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

// Create card HTML - uses data attributes to avoid inline onclick escaping issues
function createCard(movie, index, isTop10 = false) {
    const poster = getImageUrl(movie.poster_path, 'w342');
    const rankBadge = isTop10 ? `<span class="rank-badge">${String(index + 1).padStart(2, '0')}</span>` : '';
    const cardClass = isTop10 ? 'movie-card top10-card' : 'movie-card';
    const type = movie.media_type || (movie.first_air_date ? 'tv' : 'movie');
    const title = movie.title || movie.name;
    const year = (movie.release_date || movie.first_air_date || '').slice(0, 4);
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : '0.0';
    const displayType = type === 'tv' ? 'TV Show' : 'Movie';
    const desc = (movie.overview || '').slice(0, 200);
    
    return `
        <div class="${cardClass}" data-id="${movie.id}" data-type="${type}" data-title="${escapeHtml(title)}" data-rating="${rating}" data-year="${year}" data-desc="${escapeHtml(desc)}" data-poster="${poster}">
            <div class="card-image">
                ${rankBadge}
                <img src="${poster}" alt="${escapeHtml(title)}" loading="lazy" onerror="this.src='https://via.placeholder.com/342x513/1a1a1a/666?text=${encodeURIComponent(title)}'">
                <div class="card-overlay">
                    <div class="play-overlay">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${escapeHtml(title)}</h3>
                <div class="card-meta">
                    <span class="card-rating">${rating}</span>
                    <span class="card-year">${year}</span>
                    <span class="card-type">${displayType}</span>
                </div>
            </div>
        </div>
    `;
}

// Escape HTML for data attributes
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Render sections
function renderSection(containerId, movies, isTop10 = false) {
    const container = document.getElementById(containerId);
    if (!container || !movies) return;
    container.innerHTML = movies.slice(0, 10).map((movie, index) => createCard(movie, index, isTop10)).join('');
}

// Handle card clicks via event delegation
document.addEventListener('click', (e) => {
    const card = e.target.closest('.movie-card');
    if (!card) return;
    
    const id = parseInt(card.dataset.id, 10);
    const type = card.dataset.type;
    const title = card.dataset.title;
    const rating = card.dataset.rating;
    const year = card.dataset.year;
    const desc = card.dataset.desc;
    const poster = card.dataset.poster;
    
    openPlayer({ id, type, title, rating, year, desc, poster });
});

// Vidking Player URL builder
function getVidkingUrl(tmdbId, type = 'movie', season = 1, episode = 1) {
    if (type === 'tv') {
        return `https://www.vidking.net/embed/tv/${tmdbId}/${season}/${episode}?color=e50914&autoPlay=true`;
    }
    return `https://www.vidking.net/embed/movie/${tmdbId}?color=e50914&autoPlay=true`;
}

// Current playback state
let currentPlayback = { id: null, type: 'movie', season: 1, episode: 1, title: '' };

// Cached TV show data for currently opened show
let currentTVData = null;

// Fetch TV show details to get real season/episode data
async function fetchTVDetails(tmdbId) {
    return await fetchAPI(`/tv/${tmdbId}`);
}

// Populate season/episode selectors with ACTUAL data from the show
async function populateSelectorsForShow(tmdbId) {
    const seasonSelect = document.getElementById('seasonSelect');
    const episodeSelect = document.getElementById('episodeSelect');
    if (!seasonSelect || !episodeSelect) return;
    
    const showData = await fetchTVDetails(tmdbId);
    currentTVData = showData;
    
    if (!showData || !showData.seasons || showData.seasons.length === 0) {
        // Fallback: use defaults if API fails
        seasonSelect.innerHTML = '';
        episodeSelect.innerHTML = '';
        for (let s = 1; s <= 10; s++) {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = `Season ${s}`;
            seasonSelect.appendChild(opt);
        }
        for (let e = 1; e <= 30; e++) {
            const opt = document.createElement('option');
            opt.value = e;
            opt.textContent = `Episode ${e}`;
            episodeSelect.appendChild(opt);
        }
        return;
    }
    
    const now = new Date().toISOString().split('T')[0];
    
    // Filter out specials, future seasons, and seasons with 0 episodes
    const seasons = showData.seasons
        .filter(s => {
            if (s.season_number <= 0) return false;
            if (!s.episode_count || s.episode_count === 0) return false;
            if (s.air_date && s.air_date > now) return false;
            return true;
        })
        .sort((a, b) => a.season_number - b.season_number);
    
    seasonSelect.innerHTML = '';
    seasons.forEach(season => {
        const opt = document.createElement('option');
        opt.value = season.season_number;
        opt.textContent = season.name || `Season ${season.season_number}`;
        seasonSelect.appendChild(opt);
    });
    
    // Populate episodes for the first season
    episodeSelect.innerHTML = '';
    if (seasons.length > 0) {
        const epCount = seasons[0].episode_count || 1;
        for (let e = 1; e <= epCount; e++) {
            const opt = document.createElement('option');
            opt.value = e;
            opt.textContent = `Episode ${e}`;
            episodeSelect.appendChild(opt);
        }
    }
    
    seasonSelect.value = 1;
    episodeSelect.value = 1;
}

// Update episode count when season changes
function updateEpisodeCountForSeason(seasonNum) {
    const episodeSelect = document.getElementById('episodeSelect');
    if (!episodeSelect || !currentTVData || !currentTVData.seasons) return;
    
    const season = currentTVData.seasons.find(s => s.season_number === seasonNum);
    if (!season) return;
    
    const currentEpisode = parseInt(episodeSelect.value, 10) || 1;
    const epCount = season.episode_count || 1;
    
    episodeSelect.innerHTML = '';
    for (let e = 1; e <= epCount; e++) {
        const opt = document.createElement('option');
        opt.value = e;
        opt.textContent = `Episode ${e}`;
        episodeSelect.appendChild(opt);
    }
    
    // Keep current episode if valid, otherwise go to 1
    episodeSelect.value = currentEpisode <= epCount ? currentEpisode : 1;
}

// Update player URL based on current selections
function updatePlayerSource() {
    const iframe = document.getElementById('vidkingPlayer');
    if (!iframe || !currentPlayback.id) return;
    
    const url = getVidkingUrl(
        currentPlayback.id, 
        currentPlayback.type, 
        currentPlayback.season, 
        currentPlayback.episode
    );
    iframe.src = url;
}

// Open player modal
async function openPlayer(movie) {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('vidkingPlayer');
    const title = document.getElementById('detailTitle');
    const meta = document.getElementById('detailMeta');
    const desc = document.getElementById('detailDesc');
    const seSelector = document.getElementById('seasonEpisodeSelector');
    
    const type = movie.type === 'tv' || movie.type === 'TV Show' ? 'tv' : 'movie';
    
    // Store current playback state
    currentPlayback = {
        id: movie.id,
        type: type,
        season: 1,
        episode: 1,
        title: movie.title
    };
    
    // Show/hide season/episode selector
    if (seSelector) {
        seSelector.style.display = type === 'tv' ? 'flex' : 'none';
    }
    
    // Populate selectors with REAL data for TV shows
    if (type === 'tv') {
        await populateSelectorsForShow(movie.id);
    }
    
    const url = getVidkingUrl(movie.id, type, 1, 1);
    
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
    currentPlayback = { id: null, type: 'movie', season: 1, episode: 1, title: '' };
    currentTVData = null;
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
    
    // Set up hero carousel with top 10 trending
    if (trending?.results?.[0]) {
        initHeroCarousel(trending.results.slice(0, 10));
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
    
    // Season/Episode selector listeners
    const seasonSelect = document.getElementById('seasonSelect');
    const episodeSelect = document.getElementById('episodeSelect');
    
    if (seasonSelect) {
        seasonSelect.addEventListener('change', () => {
            const seasonNum = parseInt(seasonSelect.value, 10);
            currentPlayback.season = seasonNum;
            // Update episode count for this season
            updateEpisodeCountForSeason(seasonNum);
            // Update episode to 1 or current valid episode
            currentPlayback.episode = parseInt(episodeSelect.value, 10) || 1;
            updatePlayerSource();
        });
    }
    
    if (episodeSelect) {
        episodeSelect.addEventListener('change', () => {
            currentPlayback.episode = parseInt(episodeSelect.value, 10);
            updatePlayerSource();
        });
    }
}

let heroCarousel = {
    movies: [],
    currentIndex: 0,
    autoPlayInterval: null,
    isPlaying: true
};

function initHeroCarousel(movies) {
    if (!movies || movies.length === 0) return;
    
    heroCarousel.movies = movies.slice(0, 10);
    heroCarousel.currentIndex = 0;
    
    // Create dots
    const dotsContainer = document.getElementById('heroDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = heroCarousel.movies.map((_, i) => 
            `<button class="hero-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`
        ).join('');
        
        // Add click handlers to dots
        dotsContainer.querySelectorAll('.hero-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index, 10);
                showHeroMovie(index);
                resetAutoPlay();
            });
        });
    }
    
    // Show first movie
    showHeroMovie(0);
    
    // Start auto-play
    startAutoPlay();
    
    // Pause on hover
    const heroSection = document.getElementById('heroCarousel');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoPlay);
        heroSection.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Add nav button handlers
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = (heroCarousel.currentIndex - 1 + heroCarousel.movies.length) % heroCarousel.movies.length;
            showHeroMovie(newIndex);
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = (heroCarousel.currentIndex + 1) % heroCarousel.movies.length;
            showHeroMovie(newIndex);
            resetAutoPlay();
        });
    }
}

function showHeroMovie(index) {
    if (!heroCarousel.movies[index]) return;
    
    heroCarousel.currentIndex = index;
    const movie = heroCarousel.movies[index];
    
    updateHero(movie);
    
    // Update dots
    const dots = document.querySelectorAll('.hero-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function startAutoPlay() {
    if (heroCarousel.autoPlayInterval) clearInterval(heroCarousel.autoPlayInterval);
    heroCarousel.autoPlayInterval = setInterval(() => {
        const newIndex = (heroCarousel.currentIndex + 1) % heroCarousel.movies.length;
        showHeroMovie(newIndex);
    }, 6000); // Change every 6 seconds
}

function resetAutoPlay() {
    if (heroCarousel.autoPlayInterval) clearInterval(heroCarousel.autoPlayInterval);
    startAutoPlay();
}

function stopAutoPlay() {
    if (heroCarousel.autoPlayInterval) {
        clearInterval(heroCarousel.autoPlayInterval);
        heroCarousel.autoPlayInterval = null;
    }
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
    const heroImg = document.getElementById('heroImg');
    if (heroImg && backdrop) {
        heroImg.style.opacity = '0';
        setTimeout(() => {
            heroImg.src = backdrop;
            heroImg.style.opacity = '1';
        }, 200);
    }
    
    // Update hero content
    const heroTitle = document.getElementById('heroTitle');
    const heroMeta = document.getElementById('heroMeta');
    const heroDesc = document.getElementById('heroDesc');
    const playBtn = document.getElementById('heroPlay');
    
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
