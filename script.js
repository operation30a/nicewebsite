/* script.js
 - Generates placeholder video cards linking to /watch/{id}
 - Search box filters title/creator (client-side)
*/

const VIDEO_COUNT = 56; // how many placeholder videos to show initially
const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function makeVideoData(i){
  const id = 16000000 + i; // example numeric IDs like 16000001...
  const titles = [
    "Amazing Highlights", "Epic Fails Compilation", "Learn JavaScript Fast",
    "Chill Lo-fi Mix", "Speedrun: New Record", "Top 10 Moments", "Behind the Scenes",
    "Interview: Dev Talk", "Quick Tips & Tricks", "How to Build UI"
  ];
  const creators = ["ChannelOne","DevStudio","LoFiLab","GamerX","CreatorHub","DailyTech"];
  const title = titles[i % titles.length] + (i%5===0 ? " (Part " + ((i%7)+1) + ")" : "");
  const creator = creators[i % creators.length];
  const views = Math.floor(Math.random()*90000 + 1000);
  const days = Math.floor(Math.random()*365)+1;
  const durationMin = Math.floor(Math.random()*20)+2;
  const durationSec = Math.floor(Math.random()*59).toString().padStart(2,'0');
  return {
    id: id.toString(),
    title,
    creator,
    views: views.toLocaleString(),
    uploaded: `${days} days ago`,
    duration: `${durationMin}:${durationSec}`
  };
}

function createCard(video){
  const a = document.createElement('a');
  a.className = 'card';
  a.href = `/watch/${video.id}`;
  a.setAttribute('aria-label', video.title);

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  // create a subtle patterned background using inline SVG as data URL to avoid external images
  const svg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1280' height='720'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='#1b1b1b'/><stop offset='1' stop-color='#0f0f0f'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)' /><text x='50%' y='50%' fill='#444' font-size='60' font-family='Arial' dominant-baseline='middle' text-anchor='middle'>Thumbnail ${video.id}</text></svg>`);
  thumb.style.backgroundImage = `url("data:image/svg+xml;utf8,${svg}")`;
  thumb.style.backgroundSize = 'cover';
  thumb.style.backgroundPosition = 'center';

  const play = document.createElement('div');
  play.className = 'play';
  play.innerHTML = '▶';
  const time = document.createElement('div');
  time.className = 'time';
  time.textContent = video.duration;

  thumb.appendChild(play);
  thumb.appendChild(time);

  const body = document.createElement('div');
  body.className = 'card-body';

  const avatar = document.createElement('div');
  avatar.className = 'avatar-mini';
  avatar.textContent = video.creator.slice(0,2).toUpperCase();

  const meta = document.createElement('div');
  meta.className = 'meta';

  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = video.title;

  const by = document.createElement('div');
  by.className = 'by';
  by.textContent = video.creator;

  const stats = document.createElement('div');
  stats.className = 'stats';
  stats.textContent = `${video.views} views • ${video.uploaded}`;

  meta.appendChild(title);
  meta.appendChild(by);
  meta.appendChild(stats);

  body.appendChild(avatar);
  body.appendChild(meta);

  a.appendChild(thumb);
  a.appendChild(body);

  return a;
}

/* render initial grid */
function renderGrid(filter = ''){
  videoGrid.innerHTML = '';
  const lowered = filter.trim().toLowerCase();
  for(let i=1;i<=VIDEO_COUNT;i++){
    const vid = makeVideoData(i);
    if(!lowered || vid.title.toLowerCase().includes(lowered) || vid.creator.toLowerCase().includes(lowered)){
      const card = createCard(vid);
      videoGrid.appendChild(card);
    }
  }
}

/* search handlers */
searchBtn.addEventListener('click', ()=> renderGrid(searchInput.value));
searchInput.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') renderGrid(searchInput.value) });

/* menu toggle for small screens */
document.getElementById('menuToggle').addEventListener('click', ()=>{
  const sb = document.getElementById('sidebar');
  if(sb.style.display === 'block') sb.style.display = '';
  else sb.style.display = 'block';
});

/* initial render */
renderGrid();
