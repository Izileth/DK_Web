(function() {
    const carousel = document.getElementById('carousel-fast');
    const track = carousel.querySelector('.carousel-track-showcase');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.carousel-button-showcase.next');
    const prevButton = carousel.querySelector('.carousel-button-showcase .prev');
    const indicators = carousel.querySelectorAll('.carousel-indicator-showcase');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.dataset.slide, 10);
            updateCarousel();
        });
    });

    let startX = 0;
    let currentTranslate = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        currentTranslate = currentIndex * -100;
    });

    track.addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX - startX;
        track.style.transform = `translateX(${currentTranslate + moveX / window.innerWidth * 100}%)`;
    });

    track.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (endX - startX > 50) {
            prevButton.click();
        } else if (startX - endX > 50) {
            nextButton.click();
        } else {
            updateCarousel();
        }
    });
})();