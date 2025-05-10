// JavaScript para animaciones, scroll y validación básica

// Animación de scroll suave en navegación
const enlaces = document.querySelectorAll('nav ul li a');
enlaces.forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validación simple del formulario
const formulario = document.getElementById('contacto-form');
formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre-contacto').value.trim();
  const email = document.getElementById('email-contacto').value.trim();
  const mensaje = document.getElementById('mensaje-contacto').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  alert('¡Gracias por tu mensaje! Pronto te responderemos.');
  formulario.reset();
});


// Carrusel automático para galería
const carrusel = document.querySelector('.carrusel');
let scrollAmount = 0;

function autoScroll() {
  if (carrusel) {
    scrollAmount += 1;
    if (scrollAmount >= carrusel.scrollWidth / 2) {
      scrollAmount = 0;
    }
    carrusel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
}

setInterval(autoScroll, 30);

// Efecto parallax simple para la sección hero
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (hero) {
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
  }
});



