const clientes = [
  { "id": "1", "cliente": "Petrobrás", "imagem": "assets/img/clientes/client1.png"},
  { "id": "2", "cliente": "Infraero", "imagem": "assets/img/clientes/client2.png" },
  { "id": "3", "cliente": "Ministério da Saúde", "imagem": "assets/img/clientes/client3.png" },
  { "id": "4", "cliente": "Tribunal de Justiça AM;", "imagem": "assets/img/clientes/client4.png"},
  { "id": "5", "cliente": "SEBRAE - AM", "imagem": "assets/img/clientes/client5.png" },
  { "id": "6", "cliente": "IFAM -AM", "imagem": "assets/img/clientes/client6.png" },
  { "id": "7", "cliente": "SESI - AM", "imagem": "assets/img/clientes/client7.png" },
  { "id": "8", "cliente": "SEINFRA - AM", "imagem": "assets/img/clientes/client8.png" },
  { "id": "9", "cliente": "INSS", "imagem": "assets/img/clientes/client9.png" },
  { "id": "10", "cliente": "Microsoft", "imagem": "assets/img/clientes/client10.png" },
  { "id": "11", "cliente": "Instituto Nokia de Tecnologia - INDT", "imagem": "assets/img/clientes/client11.png" },
  { "id": "12", "cliente": "Moto Honda da Amazônia", "imagem": "assets/img/clientes/client12.png" },
  { "id": "13", "cliente": "Yamaha Motor da Amazônia", "imagem": "assets/img/clientes/client13.png" },
  { "id": "14", "cliente": "LG Eletronics da Amazônia", "imagem": "assets/img/clientes/client14.png" },
  { "id": "15", "cliente": "Philco da Amazônia", "imagem": "assets/img/clientes/client15.png" },
  { "id": "16", "cliente": "Athletic da Amazônia", "imagem": "assets/img/clientes/client16.png" },
  { "id": "17", "cliente": "HMB Indústria e Comércio", "imagem": "assets/img/clientes/client17.png" },
  { "id": "18", "cliente": "Labelpress", "imagem": "assets/img/clientes/client18.png" },
  { "id": "19", "cliente": "Tecnopar", "imagem": "assets/img/clientes/client19.png" },
  { "id": "20", "cliente": "Engeco", "imagem": "assets/img/clientes/client20.png" },
  { "id": "21", "cliente": "Prosegur", "imagem": "assets/img/clientes/client21.png" },
  { "id": "22", "cliente": "Ramsons", "imagem": "assets/img/clientes/client22.png" }
];

// Elementos principais
const track = document.getElementById('carousel-track');
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

// Criar os slides a partir do JSON
clientes.forEach(cliente => {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';
  slide.innerHTML = `
    <img src="${cliente.imagem}" alt="${cliente.cliente}">
    <p>${cliente.cliente}</p>
  `;
  track.appendChild(slide);
});

// Clonar slides para looping infinito
const slides = document.querySelectorAll('.carousel-slide');
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

// Carrossel automático com loop infinito
let slideIndex = 0;
const slideWidth = slides[0].offsetWidth;
const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 3 : 4;
const totalSlides = document.querySelectorAll('.carousel-slide').length;

function updateCarousel() {
  track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % (totalSlides - slidesToShow);
  updateCarousel();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Configurações de botões e auto scroll
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

let autoScroll = setInterval(nextSlide, 2000);
carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
carousel.addEventListener('mouseleave', () => autoScroll = setInterval(nextSlide, 2000));

// Ajustar track width
function setTrackWidth() {
  const allSlides = document.querySelectorAll('.carousel-slide');
  track.style.width = `${allSlides.length * slideWidth}px`;
}

setTrackWidth();
window.addEventListener('resize', () => {
  setTrackWidth();
  updateCarousel();
});