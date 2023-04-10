document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide2", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  }).mount();
});
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});
