// Mostrar secciones con botones
const botones = document.querySelectorAll('.btn-opcion');
const secciones = document.querySelectorAll('.seccion-contenido');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const objetivo = boton.getAttribute('data-target');

    secciones.forEach(seccion => {
      // Ocultar todas las secciones con un efecto suave
      seccion.style.opacity = 0;
      seccion.style.visibility = 'hidden';
    });

    const mostrar = document.getElementById(objetivo);
    if (mostrar) {
      // Mostrar la sección con un efecto suave
      mostrar.style.opacity = 1;
      mostrar.style.visibility = 'visible';
      mostrar.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contacto-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos!');
    form.reset();
  });
});


function openImage(src) {
  window.open(src, '_blank', 'width=800,height=600');
}


let currentIndex = 0;
const slides = document.querySelectorAll('.gallery-slide');
const totalSlides = slides.length;

function moveSlider() {
  const slider = document.querySelector('.gallery-slider');
  slider.style.transition = 'transform 0.5s ease'; 
  slider.style.transform = `translateX(${-(currentIndex * 100)}vw)`; 
  currentIndex = (currentIndex + 1) % totalSlides; 
}


setInterval(moveSlider, 3000);

   



