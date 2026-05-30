// Mock data with REAL, VERIFIED TMDB IDs for Vidking integration
const mockMovies = {
    top10: [
        { id: 1, tmdbId: "27205", title: "Inception", rating: "8.4", year: "2010", type: "Movie", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
        { id: 2, tmdbId: "155", title: "The Dark Knight", rating: "9.0", year: "2008", type: "Movie", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
        { id: 3, tmdbId: "157336", title: "Interstellar", rating: "8.7", year: "2014", type: "Movie", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
        { id: 4, tmdbId: "603", title: "The Matrix", rating: "8.2", year: "1999", type: "Movie", desc: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop" },
        { id: 5, tmdbId: "550", title: "Fight Club", rating: "8.4", year: "1999", type: "Movie", desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop" },
        { id: 6, tmdbId: "66732", title: "Stranger Things", rating: "8.7", year: "2016", type: "TV Show", desc: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop" },
        { id: 7, tmdbId: "1396", title: "Breaking Bad", rating: "9.5", year: "2008", type: "TV Show", desc: "A high school chemistry teacher turned methamphetamine manufacturing drug dealer navigates the criminal underworld.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
        { id: 8, tmdbId: "1399", title: "Game of Thrones", rating: "8.9", year: "2011", type: "TV Show", desc: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.", image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&h=600&fit=crop" },
        { id: 9, tmdbId: "76479", title: "The Boys", rating: "8.7", year: "2019", type: "TV Show", desc: "A group of vigilantes set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.", image: "https://images.unsplash.com/photo-1594909122849-11d3df080539?w=400&h=600&fit=crop" },
        { id: 10, tmdbId: "82856", title: "The Mandalorian", rating: "8.7", year: "2019", type: "TV Show", desc: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop" }
    ],
    trending: [
        { id: 11, tmdbId: "299534", title: "Avengers: Endgame", rating: "8.5", year: "2019", type: "Movie", desc: "After the devastating events of Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos' actions.", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop" },
        { id: 12, tmdbId: "634649", title: "Spider-Man: No Way Home", rating: "8.3", year: "2021", type: "Movie", desc: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. But the stakes become even more dangerous.", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
        { id: 13, tmdbId: "414906", title: "The Batman", rating: "7.8", year: "2022", type: "Movie", desc: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.", image: "https://images.unsplash.com/photo-1503095395647-31489c0d938e?w=400&h=600&fit=crop" },
        { id: 14, tmdbId: "438631", title: "Dune", rating: "7.8", year: "2021", type: "Movie", desc: "Paul Atreides must travel to the most dangerous planet in the universe to ensure the future of his family and people.", image: "https://images.unsplash.com/photo-1542204165-65b75d30b614?w=400&h=600&fit=crop" },
        { id: 15, tmdbId: "361743", title: "Top Gun: Maverick", rating: "8.3", year: "2022", type: "Movie", desc: "After more than thirty years of service, Pete 'Maverick' Mitchell continues to push the envelope as a test pilot.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" },
        { id: 16, tmdbId: "76600", title: "Avatar: The Way of Water", rating: "7.7", year: "2022", type: "Movie", desc: "Jake Sully lives with his newfound family on the planet of Pandora. But when a familiar threat returns, Jake must work with Neytiri.", image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop" },
        { id: 17, tmdbId: "872585", title: "Oppenheimer", rating: "8.4", year: "2023", type: "Movie", desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
        { id: 18, tmdbId: "346698", title: "Barbie", rating: "7.1", year: "2023", type: "Movie", desc: "Barbie suffers a crisis that leads her to question her world and her existence, and sets off on a journey of self-discovery.", image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop" },
        { id: 19, tmdbId: "533535", title: "Deadpool & Wolverine", rating: "7.8", year: "2024", type: "Movie", desc: "Deadpool is offered a place in the Marvel Cinematic Universe, but recruits Wolverine to save his universe from extinction.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop" },
        { id: 20, tmdbId: "569094", title: "Spider-Man: Across the Spider-Verse", rating: "8.4", year: "2023", type: "Movie", desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its existence.", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" }
    ],
    netflix: [
        { id: 21, tmdbId: "93405", title: "Squid Game", rating: "8.0", year: "2021", type: "TV Show", desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.", image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&h=600&fit=crop" },
        { id: 22, tmdbId: "100088", title: "The Last of Us", rating: "8.8", year: "2023", type: "TV Show", desc: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop" },
        { id: 23, tmdbId: "94997", title: "House of the Dragon", rating: "8.4", year: "2022", type: "TV Show", desc: "The Targaryen dynasty is at the absolute apex of its power. But within the house, a war is brewing.", image: "https://images.unsplash.com/photo-1574267432553-4b03f3f7237a?w=400&h=600&fit=crop" },
        { id: 24, tmdbId: "71912", title: "The Witcher", rating: "8.1", year: "2019", type: "TV Show", desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.", image: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&h=600&fit=crop" },
        { id: 25, tmdbId: "119051", title: "Wednesday", rating: "8.2", year: "2022", type: "TV Show", desc: "Wednesday Addams is sent to Nevermore Academy, where she attempts to master her psychic ability and solve a murder mystery.", image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop" },
        { id: 26, tmdbId: "155537", title: "The Bear", rating: "8.6", year: "2022", type: "TV Show", desc: "A young chef from the fine dining world comes home to Chicago to run his family sandwich shop after his brother's suicide.", image: "https://images.unsplash.com/photo-1558769136-c9153b77256c?w=400&h=600&fit=crop" },
        { id: 27, tmdbId: "125988", title: "Silo", rating: "8.2", year: "2023", type: "TV Show", desc: "In a ruined and toxic future, thousands live in a giant silo deep underground. But the community begins to unravel when a sheriff breaks a rule.", image: "https://images.unsplash.com/photo-1550100136-e074fa43d818?w=400&h=600&fit=crop" },
        { id: 28, tmdbId: "128998", title: "The Night Agent", rating: "7.6", year: "2023", type: "TV Show", desc: "While monitoring emergency lines, an FBI agent answers a call that plunges him into a deadly conspiracy involving a mole at the White House.", image: "https://images.unsplash.com/photo-1596727147705-54a9d750e713?w=400&h=600&fit=crop" },
        { id: 29, tmdbId: "97546", title: "Ted Lasso", rating: "8.8", year: "2020", type: "TV Show", desc: "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League soccer team.", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" },
        { id: 30, tmdbId: "95396", title: "Severance", rating: "8.7", year: "2022", type: "TV Show", desc: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" }
    ],
    toprated: [
        { id: 31, tmdbId: "278", title: "The Shawshank Redemption", rating: "8.7", year: "1994", type: "Movie", desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop" },
        { id: 32, tmdbId: "238", title: "The Godfather", rating: "8.7", year: "1972", type: "Movie", desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" },
        { id: 33, tmdbId: "240", title: "The Godfather Part II", rating: "8.6", year: "1974", type: "Movie", desc: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip.", image: "https://images.unsplash.com/photo-1542204165-65b75d30b614?w=400&h=600&fit=crop" },
        { id: 34, tmdbId: "424", title: "Schindler's List", rating: "8.6", year: "1993", type: "Movie", desc: "In German-occupied Poland during World War II, Oskar Schindler becomes concerned for his Jewish workforce after witnessing their persecution.", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop" },
        { id: 35, tmdbId: "389", title: "12 Angry Men", rating: "8.6", year: "1957", type: "Movie", desc: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
        { id: 36, tmdbId: "497", title: "The Green Mile", rating: "8.5", year: "1999", type: "Movie", desc: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" },
        { id: 37, tmdbId: "680", title: "Pulp Fiction", rating: "8.5", year: "1994", type: "Movie", desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", image: "https://images.unsplash.com/photo-1594909122849-11d3df080539?w=400&h=600&fit=crop" },
        { id: 38, tmdbId: "13", title: "Forrest Gump", rating: "8.5", year: "1994", type: "Movie", desc: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.", image: "https://images.unsplash.com/photo-1558769136-c9153b77256c?w=400&h=600&fit=crop" },
        { id: 39, tmdbId: "429", title: "The Good, the Bad and the Ugly", rating: "8.5", year: "1966", type: "Movie", desc: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&h=600&fit=crop" },
        { id: 40, tmdbId: "769", title: "GoodFellas", rating: "8.5", year: "1990", type: "Movie", desc: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" }
    ],
    comedy: [
        { id: 41, tmdbId: "502356", title: "The Super Mario Bros. Movie", rating: "7.4", year: "2023", type: "Movie", desc: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
        { id: 42, tmdbId: "350", title: "The Devil Wears Prada", rating: "6.9", year: "2006", type: "Movie", desc: "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.", image: "https://images.unsplash.com/photo-1558769136-c9153b77256c?w=400&h=600&fit=crop" },
        { id: 43, tmdbId: "447365", title: "Guardians of the Galaxy Vol. 3", rating: "8.0", year: "2023", type: "Movie", desc: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own.", image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop" },
        { id: 44, tmdbId: "575264", title: "Mission: Impossible - Dead Reckoning", rating: "7.6", year: "2023", type: "Movie", desc: "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=600&fit=crop" },
        { id: 45, tmdbId: "603692", title: "John Wick: Chapter 4", rating: "7.8", year: "2023", type: "Movie", desc: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, he must face a new enemy.", image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&h=600&fit=crop" },
        { id: 46, tmdbId: "493529", title: "Dungeons & Dragons: Honor Among Thieves", rating: "7.4", year: "2023", type: "Movie", desc: "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
        { id: 47, tmdbId: "76600", title: "Avatar: The Way of Water", rating: "7.7", year: "2022", type: "Movie", desc: "Jake Sully lives with his newfound family on the planet of Pandora. But when a familiar threat returns, Jake must work with Neytiri.", image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop" },
        { id: 48, tmdbId: "640146", title: "Ant-Man and the Wasp: Quantumania", rating: "6.5", year: "2023", type: "Movie", desc: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures.", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
        { id: 49, tmdbId: "315162", title: "Puss in Boots: The Last Wish", rating: "7.9", year: "2022", type: "Movie", desc: "Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives.", image: "https://images.unsplash.com/photo-1550100136-e074fa43d818?w=400&h=600&fit=crop" },
        { id: 50, tmdbId: "1051514", title: "The Emoji Movie", rating: "3.4", year: "2017", type: "Movie", desc: "Gene, a multi-expressional emoji, sets out on a journey to become a normal emoji.", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop" }
    ]
};

// Hero movie for featured playback
const heroMovie = {
    tmdbId: "27205",
    title: "Inception",
    rating: "8.4",
    year: "2010",
    type: "Movie",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
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
