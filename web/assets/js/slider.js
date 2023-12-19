var swiper = new Swiper('.slider-one', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1024: {
      slidesPerView: 1.5,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
