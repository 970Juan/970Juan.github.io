// Versión Moderna - script.js
// Bridge animation + controls
const bridgeArm = document.getElementById('bridgeArm');
const toggleBtn = document.getElementById('toggleBridge');
let isOpen = false;

function toggleBridge() {
  isOpen = !isOpen;
  bridgeArm.classList.toggle('open', isOpen);
}

// Auto toggle every 6 seconds
setInterval(toggleBridge, 6000);

// Button control (if present)
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => toggleBridge());
}

// Smooth scroll to top button
const scrollTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) scrollTopBtn.style.display = 'block';
  else scrollTopBtn.style.display = 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// Simple mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
const modernNav = document.getElementById('modernNav');
if (menuBtn && modernNav) {
  menuBtn.addEventListener('click', () => {
    const visible = modernNav.style.display === 'flex';
    modernNav.style.display = visible ? 'none' : 'flex';
  });
}
