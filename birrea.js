document.addEventListener('DOMContentLoaded', () => {
    // === Reviews Carousel Logic ===
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    let currentIndex = 0;

    // Arrange slides next to each other
    const updateSlidePosition = () => {
        // Move track by -100% * index
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Next Button Click
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            // Loop back to start
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    // Prev Button Click
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Loop to end
            currentIndex = slides.length - 1;
        }
        updateSlidePosition();
    });

    // Optional: Auto-play functionality (can be uncommented if needed later)
    /*
    setInterval(() => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    }, 5000);
    */
});
