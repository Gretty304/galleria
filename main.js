// script.js

// Obtener elementos del DOM
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Función para mostrar la imagen en el lightbox
function openLightbox(event) {
    lightbox.style.display = 'flex'; // Mostrar el lightbox
    lightboxImg.src = event.target.src; // Configurar la fuente de la imagen grande
}

// Función para cerrar el lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; // Ocultar el lightbox
}

// Agregar evento de clic a todas las imágenes
const images = document.querySelectorAll('.grid-item img');
images.forEach(image => {
    image.addEventListener('click', openLightbox);
});

// Agregar evento de clic al botón de cierre
closeBtn.addEventListener('click', closeLightbox);
