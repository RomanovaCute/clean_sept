let swiper;
const sliderWrapper = document.querySelector('.documents-slider');

document.addEventListener('DOMContentLoaded', () => {
  swiper = new Swiper('.documents-slider .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,  
    navigation: {
      nextEl: '.documents-slider .arrow-next',
      prevEl: '.documents-slider .arrow-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 15,
          navigation: false
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
    },
    on: {
      afterInit: () => {
        sliderWrapper.classList.remove('invisible');
      },
    },
  });
});

