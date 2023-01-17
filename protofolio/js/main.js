window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
let nav = document.querySelector(".links");
let openbtn = document.querySelector(".open__toggle");
let closebtn = document.querySelector(".close__toggle");

let openNav = () => {
  nav.style.display = "flex";
  openbtn.style.display = "none";
  closebtn.style.display = "inline-block";
};

openbtn.addEventListener("click", openNav);

let closeNav = () => {
  nav.style.display = "none";
  openbtn.style.display = "inline-block";
  closebtn.style.display = "none";
};

closebtn.addEventListener("click", closeNav);
