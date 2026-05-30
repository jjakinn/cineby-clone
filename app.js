// Mock data for Cineby clone with TMDB IDs for Vidking integration
const mockMovies = {
    top10: [
        { id: 1, tmdbId: "220102", title: "Spider-Noir", rating: "9.0", year: "2026", type: "TV Show", desc: "Ben Reilly, an aging and down on his luck private investigator in 1930s New York, is forced to grapple with his past life as the city's one and only superhero.", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop" },
        { id: 2, tmdbId: "1083381", title: "Backrooms", rating: "6.8", year: "2026", type: "Movie", desc: "A strange doorway appears in the basement of a furniture showroom.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
        { id: 3, tmdbId: "252107", title: "Star City", rating: "6.6", year: "2026", type: "TV Show", desc: "Step into a thrilling chapter inspired by For All Mankind. Same alt-history universe. Different perspective: the Soviet Union's.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop" },
        { id: 4, tmdbId: "1339713", title: "Obsession", rating: "7.9", year: "2026", type: "Movie", desc: "After breaking the mysterious 'One Wish Willow' to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
        { id: 5, tmdbId: "1662414", title: "Propeller One-Way Night Coach", rating: "5.7", year: "2026", type: "Movie", desc: "During the golden age of aviation, a young airplane enthusiast and his mother embark on a cross-country journey to Hollywood.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" },
        { id: 6, tmdbId: "76479", title: "The Boys", rating: "8.5", year: "2019", type: "TV Show", desc: "A group of vigilantes known informally as 'The Boys' set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop" },
        { id: 7, tmdbId: "124364", title: "FROM", rating: "8.4", year: "2022", type: "TV Show", desc: "Unravel the mystery of a nightmarish town in middle America that traps all those who enter.", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 8, tmdbId: "1242265", title: "Fuze", rating: "6.5", year: "2026", type: "Movie", desc: "An unexploded WWII bomb is discovered on a busy construction site in the centre of London. Chaos ensues as the military and police begin a mass evacuation against a ticking clock.", image: "https://images.unsplash.com/photo-1596727147705-54a9d750e713?w=400&h=600&fit=crop" },
        { id: 9, tmdbId: "687163", title: "Project Hail Mary", rating: "8.6", year: "2026", type: "Movie", desc: "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
        { id: 10, tmdbId: "273240", title: "Off Campus", rating: "9.1", year: "2026", type: "TV Show", desc: "Hannah Wells tutors hockey captain Garrett Graham to win over her crush. Their deal becomes real connection as they face their pasts.", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" }
    ],
    trending: [
        { id: 11, tmdbId: "1339713", title: "Obsession", rating: "7.9", year: "2026", type: "Movie", desc: "After breaking the mysterious 'One Wish Willow' to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
        { id: 12, tmdbId: "1083381", title: "Backrooms", rating: "6.8", year: "2026", type: "Movie", desc: "A strange doorway appears in the basement of a furniture showroom.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
        { id: 13, tmdbId: "1304313", title: "Lee Cronin's The Mummy", rating: "8.1", year: "2026", type: "Movie", desc: "A thrilling reboot of the classic monster franchise.", image: "https://images.unsplash.com/photo-1503095395647-31489c0d938e?w=400&h=600&fit=crop" },
        { id: 14, tmdbId: "687163", title: "Project Hail Mary", rating: "8.6", year: "2026", type: "Movie", desc: "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
        { id: 15, tmdbId: "1228710", title: "The Mandalorian and Grogu", rating: "6.8", year: "2026", type: "Movie", desc: "The Mandalorian and Grogu embark on a new adventure across the galaxy.", image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop" },
        { id: 16, tmdbId: "1380291", title: "Tom Clancy's Jack Ryan: Ghost War", rating: "7.2", year: "2026", type: "Movie", desc: "Jack Ryan faces his most dangerous mission yet in a global conspiracy.", image: "https://images.unsplash.com/photo-1594909122849-11d3df080539?w=400&h=600&fit=crop" },
        { id: 17, tmdbId: "1226863", title: "The Super Mario Galaxy Movie", rating: "8.0", year: "2026", type: "Movie", desc: "Mario and friends embark on an intergalactic adventure to save the cosmos.", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
        { id: 18, tmdbId: "1368881", title: "Ladies First", rating: "5.9", year: "2026", type: "Movie", desc: "A heartwarming comedy about friendship and following your dreams.", image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop" },
        { id: 19, tmdbId: "931285", title: "Mortal Kombat II", rating: "6.8", year: "2026", type: "Movie", desc: "The tournament continues as Earthrealm's champions fight for survival.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop" },
        { id: 20, tmdbId: "1242265", title: "Fuze", rating: "6.5", year: "2026", type: "Movie", desc: "An unexploded WWII bomb is discovered on a busy construction site in the centre of London. Chaos ensues as the military and police begin a mass evacuation against a ticking clock.", image: "https://images.unsplash.com/photo-1596727147705-54a9d750e713?w=400&h=600&fit=crop" }
    ],
    netflix: [
        { id: 21, tmdbId: "308014", title: "Berlin and the Lady with an Ermine", rating: "8.5", year: "2026", type: "TV Show", desc: "A historical drama exploring the life of Berlin during the Renaissance.", image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&h=600&fit=crop" },
        { id: 22, tmdbId: "66732", title: "Stranger Things", rating: "8.6", year: "2016", type: "TV Show", desc: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop" },
        { id: 23, tmdbId: "224941", title: "The Boroughs", rating: "7.1", year: "2026", type: "TV Show", desc: "A group of retirees in a seemingly ordinary community discover they have extraordinary powers.", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop" },
        { id: 24, tmdbId: "259837", title: "The WONDERfools", rating: "9.2", year: "2026", type: "TV Show", desc: "An inspiring tale of unlikely heroes discovering their true potential.", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
        { id: 25, tmdbId: "4656", title: "Raw", rating: "6.8", year: "1993", type: "TV Show", desc: "A coming-of-age drama set in the world of professional wrestling.", image: "https://images.unsplash.com/photo-1574267432553-4b03f3f7237a?w=400&h=600&fit=crop" },
        { id: 26, tmdbId: "63174", title: "Lucifer", rating: "8.4", year: "2016", type: "TV Show", desc: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity.", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 27, tmdbId: "67178", title: "Marvel's The Punisher", rating: "8.1", year: "2017", type: "TV Show", desc: "After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as 'The Punisher'.", image: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&h=600&fit=crop" },
        { id: 28, tmdbId: "200709", title: "Weak Hero", rating: "8.7", year: "2022", type: "TV Show", desc: "Yeon Si Eun is a model student who ranks at the top of his high school. Physically, Yeon Si Eun appears weak, but by using his quick wit and tools, he fights against the violence that takes place inside and outside of his school.", image: "https://images.unsplash.com/photo-1594909122849-11d3df080539?w=400&h=600&fit=crop" },
        { id: 29, tmdbId: "45790", title: "JoJo's Bizarre Adventure", rating: "8.6", year: "2012", type: "TV Show", desc: "The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.", image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop" },
        { id: 30, tmdbId: "287429", title: "Two Husbands One Wife", rating: "7.4", year: "2025", type: "TV Show", desc: "A complex romantic drama exploring unconventional relationships.", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" }
    ],
    toprated: [
        { id: 31, tmdbId: "278", title: "The Shawshank Redemption", rating: "8.7", year: "1994", type: "Movie", desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop" },
        { id: 32, tmdbId: "238", title: "The Godfather", rating: "8.7", year: "1972", type: "Movie", desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" },
        { id: 33, tmdbId: "687163", title: "Project Hail Mary", rating: "8.6", year: "2026", type: "Movie", desc: "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
        { id: 34, tmdbId: "1130276", title: "Succubus", rating: "8.6", year: "2024", type: "Movie", desc: "A chilling supernatural thriller that explores the dark side of desire.", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 35, tmdbId: "240", title: "The Godfather Part II", rating: "8.6", year: "1974", type: "Movie", desc: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.", image: "https://images.unsplash.com/photo-1542204165-65b75d30b614?w=400&h=600&fit=crop" },
        { id: 36, tmdbId: "424", title: "Schindler's List", rating: "8.6", year: "1993", type: "Movie", desc: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop" },
        { id: 37, tmdbId: "389", title: "12 Angry Men", rating: "8.6", year: "1957", type: "Movie", desc: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
        { id: 38, tmdbId: "1330021", title: "Remarkably Bright Creatures", rating: "8.5", year: "2026", type: "Movie", desc: "A heartwarming tale of an unlikely friendship between a widow and a giant Pacific octopus.", image: "https://images.unsplash.com/photo-1550100136-e074fa43d818?w=400&h=600&fit=crop" },
        { id: 39, tmdbId: "155", title: "The Dark Knight", rating: "8.5", year: "2008", type: "Movie", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 40, tmdbId: "497", title: "The Green Mile", rating: "8.5", year: "1999", type: "Movie", desc: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" }
    ],
    comedy: [
        { id: 41, tmdbId: "1226863", title: "The Super Mario Galaxy Movie", rating: "8.0", year: "2026", type: "Movie", desc: "Mario and friends embark on an intergalactic adventure to save the cosmos.", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
        { id: 42, tmdbId: "350", title: "The Devil Wears Prada", rating: "7.4", year: "2006", type: "Movie", desc: "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.", image: "https://images.unsplash.com/photo-1558769136-c9153b77256c?w=400&h=600&fit=crop" },
        { id: 43, tmdbId: "1327819", title: "Hoppers", rating: "8.1", year: "2026", type: "Movie", desc: "A hilarious animated adventure following a group of unlikely heroes.", image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop" },
        { id: 44, tmdbId: "1368881", title: "Ladies First", rating: "5.9", year: "2026", type: "Movie", desc: "A heartwarming comedy about friendship and following your dreams.", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" },
        { id: 45, tmdbId: "1297842", title: "GOAT", rating: "8.1", year: "2026", type: "Movie", desc: "An inspiring sports comedy about an underdog team that defies all odds.", image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&h=600&fit=crop" },
        { id: 46, tmdbId: "1390300", title: "Over Your Dead Body", rating: "7.2", year: "2026", type: "Movie", desc: "A dysfunctional couple head to a remote cabin to 'reconnect', but each has secret intentions to kill the other.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
        { id: 47, tmdbId: "1084242", title: "Zootopia 2", rating: "7.6", year: "2025", type: "Movie", desc: "Judy Hopps and Nick Wilde return for another adventure in the bustling mammal metropolis.", image: "https://images.unsplash.com/photo-1550100136-e074fa43d818?w=400&h=600&fit=crop" },
        { id: 48, tmdbId: "1266127", title: "Ready or Not: Here I Come", rating: "7.7", year: "2026", type: "Movie", desc: "The deadly game of hide and seek continues in this thrilling sequel.", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
        { id: 49, tmdbId: "1301421", title: "The Sheep Detectives", rating: "7.6", year: "2026", type: "Movie", desc: "A whimsical mystery featuring the most unlikely detectives in the countryside.", image: "https://images.unsplash.com/photo-1558769136-c9153b77256c?w=400&h=600&fit=crop" },
        { id: 50, tmdbId: "1699574", title: "Deool Band 2", rating: "2026", year: "", type: "Movie", desc: "The beloved Marathi comedy returns with more hilarious adventures.", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop" }
    ]
};

// Hero movie for featured playback
const heroMovie = {
    tmdbId: "1083381",
    title: "Backrooms",
    rating: "6.8",
    year: "2026",
    type: "Movie",
    desc: "A strange doorway appears in the basement of a furniture showroom."
};

// Flatten all movies into a lookup map for click handling
const allMovies = {};
Object.values(mockMovies).flat().forEach(m => allMovies[m.id] = m);

// Vidking Player URL builder
function getVidkingUrl(tmdbId, type = 'movie') {
    return `https://www.vidking.net/embed/${type}/${tmdbId}?color=e50914&autoPlay=true`;
}

// Open player modal
function openPlayer(movie) {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('vidkingPlayer');
    const title = document.getElementById('detailTitle');
    const meta = document.getElementById('detailMeta');
    const desc = document.getElementById('detailDesc');
    
    const type = movie.type === 'TV Show' ? 'tv' : 'movie';
    const url = getVidkingUrl(movie.tmdbId, type);
    
    iframe.src = url;
    title.textContent = movie.title;
    meta.innerHTML = `
        <span class="rating">${movie.rating}</span>
        <span class="year">${movie.year}</span>
        <span class="genre">${movie.type}</span>
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

// Create card HTML
function createCard(movie, index, isTop10 = false) {
    const rankBadge = isTop10 ? `<span class="rank-badge">${String(index + 1).padStart(2, '0')}</span>` : '';
    const cardClass = isTop10 ? 'movie-card top10-card' : 'movie-card';
    
    return `
        <div class="${cardClass}" data-id="${movie.id}" onclick="openPlayer(allMovies[${movie.id}])">
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
    
    // Hero buttons
    document.querySelector('.hero .btn-play')?.addEventListener('click', () => {
        openPlayer(heroMovie);
    });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);
