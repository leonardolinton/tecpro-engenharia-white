// Carrossel de clientes
const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

// Clone slides para infinito
if (carousel && track && slides.length > 0) {
    const slideWidth = slides[0].offsetWidth;
    const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 3 : 4;
    let slideIndex = 0;

    // Duplicar slides para simular carrossel infinito
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    // Configurar largura do track
    function setTrackWidth() {
        const allSlides = document.querySelectorAll('.carousel-slide');
        track.style.width = `${allSlides.length * slideWidth}px`;
    }

    setTrackWidth();

    // Atualizar posição do carrossel
    function updateCarousel() {
        track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    // Próximo slide
    function nextSlide() {
        const totalSlides = document.querySelectorAll('.carousel-slide').length;
        slideIndex = (slideIndex + 1) % (totalSlides - slidesToShow);
        updateCarousel();
    }

    // Slide anterior
    function prevSlide() {
        const totalSlides = document.querySelectorAll('.carousel-slide').length;
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners para botões
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Redimensionar carrossel ao redimensionar janela
    window.addEventListener('resize', () => {
        setTrackWidth();
        updateCarousel();
    });

    // Auto scroll do carrossel a cada 3 segundos
    let autoScroll = setInterval(nextSlide, 3000);

    // Parar auto scroll quando o mouse estiver sobre o carrossel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });

    // Reiniciar auto scroll quando o mouse sair do carrossel
    carousel.addEventListener('mouseleave', () => {
        autoScroll = setInterval(nextSlide, 3000);
    });
}