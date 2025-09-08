// Inject the SVG inline so CSS animations apply
const scene = document.getElementById('teaScene');
const btn   = document.getElementById('teaBtn');

async function loadTea() {
  if (scene.dataset.loaded) return;              // load once
  const resp = await fetch('tea.svg');           // same-folder fetch
  const svg  = await resp.text();
  scene.innerHTML = svg;
  scene.dataset.loaded = '1';
}

function playTea() {
  // Ensure SVG is there, then trigger animation by toggling .play
  loadTea().then(() => {
    scene.classList.remove('play');
    // reflow to restart animations
    void scene.offsetWidth;
    scene.classList.add('play');
  });
}

btn.addEventListener('click', playTea);
