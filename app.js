// Mock data for Cineby clone
const mockMovies = {
    top10: [
        { id: 1, title: "Spider-Noir", rating: "9.0", year: "2026", type: "TV Show", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop" },
        { id: 2, title: "Backrooms", rating: "6.8", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
        { id: 3, title: "Star City", rating: "6.6", year: "2026", type: "TV Show", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop" },
        { id: 4, title: "Obsession", rating: "7.9", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
        { id: 5, title: "Propeller One-Way Night Coach", rating: "5.7", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" },
        { id: 6, title: "The Boys", rating: "8.5", year: "2019", type: "TV Show", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop" },
        { id: 7, title: "FROM", rating: "8.4", year: "2022", type: "TV Show", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 8, title: "Fuze", rating: "6.5", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1596727147705-54a9d750e713?w=400&h=600&fit=crop" },
        { id: 9, title: "Project Hail Mary", rating: "8.6", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
        { id: 10, title: "Off Campus", rating: "9.1", year: "2026", type: "TV Show", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" }
    ],
    trending: [
        { id: 11, title: "Obsession", rating: "7.9", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
        { id: 12, title: "Backrooms", rating: "6.8", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
        { id: 13, title: "Lee Cronin's The Mummy", rating: "8.1", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1503095395647-31489c0d938e?w=400&h=600&fit=crop" },
        { id: 14, title: "Project Hail Mary", rating: "8.6", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
        { id: 15, title: "The Mandalorian and Grogu", rating: "6.8", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop" },
        { id: 16, title: "Tom Clancy's Jack Ryan: Ghost War", rating: "7.2", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1594909122849-11d3df080539?w=400&h=600&fit=crop" },
        { id: 17, title: "The Super Mario Galaxy Movie", rating: "8.0", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
        { id: 18, title: "Ladies First", rating: "5.9", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop" },
        { id: 19, title: "Mortal Kombat II", rating: "6.8", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop" },
        { id: 20, title: "Fuze", rating: "6.5", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1596727147705-54a9d750e713?w=400&h=600&fit=crop" }
    ],
    netflix: [
        { id: 21, title: "Berlin and the Lady with an Ermine", rating: "8.5", year: "2026", type: "TV Show", image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&h=600&fit=crop" },
        { id: 22, title: "Stranger Things", rating: "8.6", year: "2016", type: "TV Show", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop" },
        { id: 23, title: "The Boroughs", rating: "7.1", year: "2026", type: "TV Show", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop" },
        { id: 24, title: "The WONDERfools", rating: "9.2", year: "2026", type: "TV Show", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
        { id: 25, title: "Raw", rating: "6.8", year: "1993", type: "TV Show", image: "https://images.unsplash.com/photo-1574267432553-4b03f3f7237a?w=400&h=600&fit=crop" },
        { id: 26, title: "Lucifer", rating: "8.4", year: "2016", type: "TV Show", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 27, title: "Marvel's The Punisher", rating: "8.1", year: "2017", type: "TV Show", image: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&h=600&fit=crop" },
        { id: 28, title: "Weak Hero", rating: "8.7", year: "2022", type: "TV Show", image: "https://images.unsplash.com/photo-1594909122849-11d3df080539?w=400&h=600&fit=crop" },
        { id: 29, title: "JoJo's Bizarre Adventure", rating: "8.6", year: "2012", type: "TV Show", image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop" },
        { id: 30, title: "Two Husbands One Wife", rating: "7.4", year: "2025", type: "TV Show", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" }
    ],
    toprated: [
        { id: 31, title: "The Shawshank Redemption", rating: "8.7", year: "1994", type: "Movie", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop" },
        { id: 32, title: "The Godfather", rating: "8.7", year: "1972", type: "Movie", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" },
        { id: 33, title: "Project Hail Mary", rating: "8.6", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
        { id: 34, title: "Succubus", rating: "8.6", year: "2024", type: "Movie", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 35, title: "The Godfather Part II", rating: "8.6", year: "1974", type: "Movie", image: "https://images.unsplash.com/photo-1542204165-65b75d30b614?w=400&h=600&fit=crop" },
        { id: 36, title: "Schindler's List", rating: "8.6", year: "1993", type: "Movie", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop" },
        { id: 37, title: "12 Angry Men", rating: "8.6", year: "1957", type: "Movie", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
        { id: 38, title: "Remarkably Bright Creatures", rating: "8.5", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1550100136-e074fa43d818?w=400&h=600&fit=crop" },
        { id: 39, title: "The Dark Knight", rating: "8.5", year: "2008", type: "Movie", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 40, title: "The Green Mile", rating: "8.5", year: "1999", type: "Movie", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" }
    ],
    comedy: [
        { id: 41, title: "The Super Mario Galaxy Movie", rating: "8.0", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
        { id: 42, title: "The Devil Wears Prada", rating: "7.4", year: "2006", type: "Movie", image: "https://images.unsplash.com/photo-1558769136-c9153b77256c?w=400&h=600&fit=crop" },
        { id: 43, title: "Hoppers", rating: "8.1", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop" },
        { id: 44, title: "Ladies First", rating: "5.9", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" },
        { id: 45, title: "GOAT", rating: "8.1", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&h=600&fit=crop" },
        { id: 46, title: "Over Your Dead Body", rating: "7.2", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
        { id: 47, title: "Zootopia 2", rating: "7.6", year: "2025", type: "Movie", image: "https://images.unsplash.com/photo-1550100136-e074fa43d818?w=400&h=600&fit=crop" },
        { id: 48, title: "Ready or Not: Here I Come", rating: "7.7", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
        { id: 49, title: "The Sheep Detectives", rating: "7.6", year: "2026", type: "Movie", image: "https://images.unsplash.com/photo-1558769136-c9153b77256c?w=400&h=600&fit=crop" },
        { id: 50, title: "Deool Band 2", rating: "2026", year: "", type: "Movie", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop" }
    ]
};

// Create card HTML
function createCard(movie, index, isTop10 = false) {
    const rankBadge = isTop10 ? `<span class="rank-badge">${String(index + 1).padStart(2, '0')}</span>` : '';
    const cardClass = isTop10 ? 'movie-card top10-card' : 'movie-card';
    
    return `
        <div class="${cardClass}" data-id="${movie.id}">
            <div class="card-image">
                ${rankBadge}
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                <div class="card-overlay">
                    <div class="play-overlay">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                <div class="card-meta">
                    <span class="card-rating">${movie.rating}</span>
                    <span class="card-year">${movie.year}</span>
                    <span class="card-type">${movie.type}</span>
                </div>
            </div>
        </div>
    `;
}

// Render sections
function renderSection(sectionId, movies, isTop10 = false) {
    const container = document.getElementById(sectionId);
    if (!container) return;
    
    container.innerHTML = movies.map((movie, index) => createCard(movie, index, isTop10)).join('');
}

// Initialize
function init() {
    renderSection('top10', mockMovies.top10, true);
    renderSection('trending', mockMovies.trending);
    renderSection('netflix', mockMovies.netflix);
    renderSection('toprated', mockMovies.toprated);
    renderSection('comedy', mockMovies.comedy);
    
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
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        
        lastScroll = currentScroll;
    });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);
