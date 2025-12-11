// Video Database - In a real app, this would come from a backend API
const videoDatabase = {
    "16203196": {
        id: "16203196",
        title: "Beautiful Mountain Landscape with Relaxing Music",
        description: "Enjoy breathtaking views of majestic mountains with calming background music. Perfect for relaxation, meditation, or as a peaceful background while working.\n\nFilmed in the Swiss Alps during summer. The video features stunning 4K footage of alpine meadows, crystal clear lakes, and majestic peaks.\n\nSubscribe for more nature videos every week!",
        channelName: "Nature Relaxation",
        subscriberCount: "1.2M subscribers",
        views: "2,543,987",
        likes: 125430,
        dislikes: 3240,
        uploadDate: "Mar 15, 2023",
        duration: "8:42",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    "24975318": {
        id: "24975318",
        title: "Beginner's Guide to JavaScript Programming",
        description: "Learn JavaScript fundamentals in this comprehensive beginner tutorial. We cover variables, functions, loops, and DOM manipulation.\n\nTimestamps:\n0:00 Introduction\n1:15 Variables and Data Types\n5:30 Functions\n12:45 Loops\n18:20 DOM Manipulation\n25:00 Building a Simple Project\n\nCode examples available on GitHub: github.com/example/javascript-basics",
        channelName: "CodeMaster",
        subscriberCount: "850K subscribers",
        views: "1,876,543",
        likes: 98560,
        dislikes: 1540,
        uploadDate: "Feb 3, 2023",
        duration: "32:15",
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    "38571294": {
        id: "38571294",
        title: "Amazing Street Food Tour in Bangkok",
        description: "Join us on an incredible street food adventure through Bangkok's famous markets. We try pad thai, mango sticky rice, grilled skewers, and much more!\n\nLocations visited:\n- Yaowarat Road (Chinatown)\n- Chatuchak Weekend Market\n- Khao San Road\n- Or Tor Kor Market\n\nFood expenses for this video: ~$85",
        channelName: "Food Explorer",
        subscriberCount: "3.4M subscribers",
        views: "5,231,876",
        likes: 256780,
        dislikes: 5890,
        uploadDate: "Jan 22, 2023",
        duration: "18:33",
        thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    "47289651": {
        id: "47289651",
        title: "Morning Yoga Routine for Beginners",
        description: "Start your day with this 15-minute beginner-friendly yoga routine. No experience needed! All you need is a yoga mat and comfortable clothes.\n\nPoses included:\n- Cat-Cow Stretch\n- Downward Facing Dog\n- Child's Pose\n- Warrior I & II\n- Mountain Pose\n- Savasana\n\nRemember to breathe deeply and listen to your body. Never push into pain.",
        channelName: "Yoga with Maya",
        subscriberCount: "950K subscribers",
        views: "3,123,456",
        likes: 187650,
        dislikes: 2650,
        uploadDate: "Apr 5, 2023",
        duration: "15:20",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    "56321487": {
        id: "56321487",
        title: "DIY Home Office Setup on a Budget",
        description: "Transform any space into a productive home office without breaking the bank. In this video, I show you how to create an ergonomic and stylish workspace for under $300.\n\nItems featured:\n- IKEA desk hack\n- Ergonomic chair alternatives\n- DIY cable management\n- Affordable lighting solutions\n- Decor ideas to boost productivity\n\nLinks to all products in the description below.",
        channelName: "Home DIY Pro",
        subscriberCount: "1.5M subscribers",
        views: "2,987,123",
        likes: 165430,
        dislikes: 4320,
        uploadDate: "Mar 28, 2023",
        duration: "22:45",
        thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    "67891234": {
        id: "67891234",
        title: "Guitar Lesson: Learn Your First Song in 10 Minutes",
        description: "Absolute beginner guitar lesson! Learn to play 'Horse With No Name' by America with just two easy chords. Perfect for your first day with a guitar.\n\nChords needed:\n- Em7 (super easy!)\n- D6/9\n\nGuitar tuning: Standard (E A D G B E)\n\nPractice tips: Start slow, use a metronome, and practice 15 minutes daily.",
        channelName: "Guitar Made Easy",
        subscriberCount: "2.1M subscribers",
        views: "4,567,890",
        likes: 234560,
        dislikes: 6780,
        uploadDate: "Feb 14, 2023",
        duration: "10:05",
        thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    }
};

// Get all video IDs for random selection
const videoIds = Object.keys(videoDatabase);

// DOM Elements
const videoGrid = document.getElementById('videoGrid');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const categoryButtons = document.querySelectorAll('.category-btn');
const mainVideoPlayer = document.getElementById('mainVideoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoViews = document.getElementById('videoViews');
const uploadDate = document.getElementById('uploadDate');
const likeCount = document.getElementById('likeCount');
const dislikeCount = document.getElementById('dislikeCount');
const channelName = document.getElementById('channelName');
const subscriberCount = document.getElementById('subscriberCount');
const videoDescription = document.getElementById('videoDescription');
const recommendedVideos = document.getElementById('recommendedVideos');
const showMoreBtn = document.querySelector('.show-more-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the homepage or watch page
    if (videoGrid) {
        // We're on the homepage
        loadHomepageVideos();
        setupEventListeners();
    } else if (mainVideoPlayer) {
        // We're on the watch page
        loadVideoFromURL();
        loadRecommendedVideos();
        setupWatchPageEventListeners();
    }
});

// Homepage Functions
function loadHomepageVideos() {
    videoGrid.innerHTML = '';
    
    // Shuffle video IDs for random display
    const shuffledIds = [...videoIds].sort(() => 0.5 - Math.random());
    
    // Create video cards for each video
    shuffledIds.forEach(videoId => {
        const video = videoDatabase[videoId];
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.videoId = video.id;
    
    card.innerHTML = `
        <div class="thumbnail-container">
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="duration">${video.duration}</div>
        </div>
        <div class="video-info">
            <div class="video-details">
                <h3 class="video-title">${video.title}</h3>
                <div class="channel-name-small">${video.channelName}</div>
                <div class="video-stats-small">
                    <span>${formatViews(video.views)} views</span>
                    <span class="dot-separator">•</span>
                    <span>${video.uploadDate}</span>
                </div>
            </div>
        </div>
    `;
    
    // Add click event to open video
    card.addEventListener('click', function() {
        window.location.href = `watch.html?videoId=${video.id}`;
    });
    
    return card;
}

function formatViews(views) {
    if (views.includes(',')) return views; // Already formatted
    
    const numViews = parseInt(views.replace(/,/g, ''));
    if (numViews >= 1000000) {
        return (numViews / 1000000).toFixed(1) + 'M';
    } else if (numViews >= 1000) {
        return (numViews / 1000).toFixed(1) + 'K';
    }
    return numViews.toString();
}

function setupEventListeners() {
    // Search functionality
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real app, you would filter videos by category here
            // For this demo, we'll just reload random videos
            loadHomepageVideos();
        });
    });
    
    // Mobile menu button
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            alert('Mobile menu would open here in a real application.');
        });
    }
}

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        loadHomepageVideos();
        return;
    }
    
    // Filter videos based on search term
    const filteredVideos = videoIds
        .map(id => videoDatabase[id])
        .filter(video => 
            video.title.toLowerCase().includes(searchTerm) ||
            video.channelName.toLowerCase().includes(searchTerm) ||
            video.description.toLowerCase().includes(searchTerm)
        );
    
    // Display filtered videos
    videoGrid.innerHTML = '';
    
    if (filteredVideos.length === 0) {
        videoGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <h3>No videos found for "${searchTerm}"</h3>
                <p>Try different keywords or browse our categories</p>
            </div>
        `;
        return;
    }
    
    filteredVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

// Watch Page Functions
function loadVideoFromURL() {
    // Get video ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('videoId') || videoIds[0]; // Default to first video if none specified
    
    // Check if video exists
    if (!videoDatabase[videoId]) {
        // Redirect to homepage if video doesn't exist
        window.location.href = 'index.html';
        return;
    }
    
    const video = videoDatabase[videoId];
    
    // Update page title
    document.title = `${video.title} - StreamTube`;
    
    // Update video player and info
    mainVideoPlayer.src = video.videoUrl;
    videoTitle.textContent = video.title;
    videoViews.textContent = `${formatViews(video.views)} views`;
    uploadDate.textContent = video.uploadDate;
    likeCount.textContent = formatNumber(video.likes);
    dislikeCount.textContent = formatNumber(video.dislikes);
    channelName.textContent = video.channelName;
    subscriberCount.textContent = video.subscriberCount;
    videoDescription.textContent = video.description;
    
    // Setup like/dislike buttons
    const likeBtn = document.querySelector('.like-btn');
    const dislikeBtn = document.querySelector('.dislike-btn');
    
    likeBtn.addEventListener('click', function() {
        video.likes++;
        likeCount.textContent = formatNumber(video.likes);
        this.style.color = '#065fd4';
        dislikeBtn.style.color = '';
    });
    
    dislikeBtn.addEventListener('click', function() {
        video.dislikes++;
        dislikeCount.textContent = formatNumber(video.dislikes);
        this.style.color = '#065fd4';
        likeBtn.style.color = '';
    });
    
    // Setup subscribe button
    const subscribeBtn = document.querySelector('.subscribe-btn');
    let isSubscribed = false;
    
    subscribeBtn.addEventListener('click', function() {
        if (!isSubscribed) {
            this.textContent = 'Subscribed';
            this.style.backgroundColor = '#606060';
            isSubscribed = true;
        } else {
            this.textContent = 'Subscribe';
            this.style.backgroundColor = '#cc0000';
            isSubscribed = false;
        }
    });
}

function loadRecommendedVideos() {
    // Get current video ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const currentVideoId = urlParams.get('videoId') || videoIds[0];
    
    // Filter out current video and get random other videos
    const otherVideoIds = videoIds.filter(id => id !== currentVideoId);
    const shuffledIds = [...otherVideoIds].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    // Create recommended video elements
    recommendedVideos.innerHTML = '';
    
    shuffledIds.forEach(videoId => {
        const video = videoDatabase[videoId];
        const recommendedVideo = createRecommendedVideo(video);
        recommendedVideos.appendChild(recommendedVideo);
    });
}

function createRecommendedVideo(video) {
    const div = document.createElement('div');
    div.className = 'recommended-video';
    div.dataset.videoId = video.id;
    
    div.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="recommended-thumbnail">
        <div class="recommended-info">
            <h4 class="recommended-title">${video.title}</h4>
            <div class="recommended-channel">${video.channelName}</div>
            <div class="recommended-stats">${formatViews(video.views)} views • ${video.uploadDate}</div>
        </div>
    `;
    
    // Add click event to open video
    div.addEventListener('click', function() {
        window.location.href = `watch.html?videoId=${video.id}`;
    });
    
    return div;
}

function setupWatchPageEventListeners() {
    // Show more/less description toggle
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const descriptionText = document.querySelector('.description-text');
            
            if (descriptionText.classList.contains('expanded')) {
                descriptionText.classList.remove('expanded');
                this.textContent = 'Show more';
            } else {
                descriptionText.classList.add('expanded');
                this.textContent = 'Show less';
            }
        });
    }
    
    // Share button
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            const videoUrl = window.location.href;
            navigator.clipboard.writeText(videoUrl).then(() => {
                alert('Video link copied to clipboard!');
            });
        });
    }
    
    // Save button
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            alert('Video saved to your library!');
        });
    }
    
    // Search functionality (same as homepage)
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = document.querySelector('.search-input').value.trim();
            if (searchTerm) {
                // Redirect to homepage with search
                window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
    
    // Mobile menu button
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            alert('Mobile menu would open here in a real application.');
        });
    }
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Handle URL parameters on homepage load
function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam && searchInput) {
        searchInput.value = searchParam;
        performSearch();
    }
}

// Call this on homepage initialization
if (videoGrid) {
    checkURLParams();
}
