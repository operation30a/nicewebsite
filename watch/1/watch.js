// Read URL parameters
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const src = urlParams.get("src");
const upload = urlParams.get("upload"); // <-- NEW

// Apply video iframe
document.getElementById("videoFrame").src = src;

// Format upload date/time
let uploadText = "Unknown upload date";
if (upload) {
    const dateObj = new Date(upload);
    uploadText = `Uploaded on ${dateObj.toLocaleString()}`;
}

// Fake title + info
document.getElementById("videoTitle").innerText = `Video ID: ${id}`;
document.getElementById("videoInfo").innerText = `123K views • ${uploadText}`;

let recHTML = "";
recommended.forEach(v => {
    recHTML += `
    <div class="rec-card" onclick="window.location='/watch/watch.html?id=${v.id}&src=${v.src}&upload=${v.upload}'">
        <div class="rec-thumb"></div>
        <div class="rec-title">${v.title}</div>
    </div>`;
});

document.getElementById("recommendedList").innerHTML = recHTML;
