document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-words');
    const words = [...carousel.children];
  
    // Clone as palavras para criar o efeito infinito
    words.forEach((word) => {
      const clone = word.cloneNode(true);
      carousel.appendChild(clone);
    });
  });
  