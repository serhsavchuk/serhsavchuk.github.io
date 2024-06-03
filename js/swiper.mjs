import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

function getSlidesPerView() {
  const windowWidth = window.innerWidth;
  console.log("windowWidth", windowWidth);
  if (windowWidth >= 1400) {
    return 3;
  } else if (windowWidth >= 1200) {
    return 2.4;
  } else if (windowWidth >= 1024) {
    return 2.9;
  } else if (windowWidth >= 768) {
    return 2.3;
  }
  return 2;
}

export default function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 400,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: getSlidesPerView(),

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
