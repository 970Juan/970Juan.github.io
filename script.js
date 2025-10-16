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

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".galeria-grid img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let index = 0;
  const contenedor = document.querySelector('.carrusel-contenedor');
  const imagenes = document.querySelectorAll('.carrusel-contenedor img');
  const total = imagenes.length;

  function moverCarrusel() {
    index = (index + 1) % total;
    contenedor.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(moverCarrusel, 3000); // cada 3 segundos
});