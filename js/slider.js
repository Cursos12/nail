document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.custom-slider', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});