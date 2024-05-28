import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

console.log(123);

const swiper = new Swiper(".swiper-container", {
  effect: "slide",
  loop: true,
});

console.log(swiper);
