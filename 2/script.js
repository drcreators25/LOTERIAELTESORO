document.addEventListener('DOMContentLoaded', () => {

    // 2. Testimonios Carousel Logic with Buttons and Auto-scroll
    const testimonioTrack = document.querySelector('.testimonio-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (testimonioTrack) {
        const images = testimonioTrack.querySelectorAll('img');
        const totalImages = images.length;
        let currentIndex = 0;

        const scrollToImage = (index) => {
            const firstImg = testimonioTrack.querySelector('img');
            if (firstImg) {
                const imageWidth = firstImg.offsetWidth;
                const gap = 20;
                const scrollAmount = index * (imageWidth + gap);

                testimonioTrack.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        };

        // Manual Navigation
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            scrollToImage(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            scrollToImage(currentIndex);
        });

        // Auto-scroll
        setInterval(() => {
            // Solo avanza si el usuario no está interactuando (opcional, aquí siempre avanza)
            currentIndex = (currentIndex + 1) % totalImages;
            scrollToImage(currentIndex);
        }, 5000);
    }

    // 3. Scroll Animation Logic
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});
