// Read URL parameters
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const src = urlParams.get("src");

// Apply video iframe
document.getElementById("videoFrame").src = src;

// Fake title + info
document.getElementById("videoTitle").innerText = `Video ID: ${id}`;
document.getElementById("videoInfo").innerText = `123K views • Uploaded 3 days ago`;

// Recommended videos
const recommended = [
    { id: "1111", title: "Funny Moments Compilation", src: "https://mxdrop.to/e/example1" },
    { id: "2222", title: "Top 10 Facts You Didn't Know", src: "https://mxdrop.to/e/example2" },
    { id: "3333", title: "Epic Gaming Highlights", src: "https://mxdrop.to/e/example3" },
    { id: "4444", title: "Movie Trailer 2025", src: "https://mxdrop.to/e/example4" },
];

let recHTML = "";
recommended.forEach(v => {
    recHTML += `
    <div class="rec-card" onclick="window.location='/watch/watch.html?id=${v.id}&src=${v.src}'">
        <div class="rec-thumb"></div>
        <div class="rec-title">${v.title}</div>
    </div>`;
});

document.getElementById("recommendedList").innerHTML = recHTML;
