document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonial-carousel');
    const testimonials = [...carousel.children];
  
    // Clone os cartões para criar o efeito infinito
    testimonials.forEach((testimonial) => {
      const clone = testimonial.cloneNode(true);
      carousel.appendChild(clone);
    });
  });
  