(function() {
    const carousel = document.getElementById('carousel-2');
    const track = carousel.querySelector('.showcase-carousel-track');
    const slides = Array.from(track.children);
    const bg = document.getElementById('carousel-bg-2');
    const indicators = Array.from(carousel.querySelectorAll('.showcase-carousel-indicator'));
    let currentIndex = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        const activeSlide = slides[currentIndex];
        const bgImage = activeSlide?.dataset.bg || '';
        bg.style.backgroundImage = `url('${bgImage}')`;
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000);

    carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carousel.addEventListener('mouseleave', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 5000);
    });

    updateCarousel();
})();
