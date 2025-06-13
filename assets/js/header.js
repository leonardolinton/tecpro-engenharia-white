const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // ajuste conforme a altura do seu header
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/*=== Muda a cor da barra de navegão, com a rolagem do scrool ===*/
window.addEventListener("scroll", function () {
  const headers = document.querySelectorAll(".menuNav");
  headers.forEach(header => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});



