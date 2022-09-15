let swiper;
const sliderWrapper = document.querySelector('.documents-slider');
const orderBtn = document.querySelectorAll('.order-button'),
    popUp = document.querySelector('.popup-body'),
    closePopupBtn = document.querySelector('.closeBtn'),
    increaseBtn = document.querySelector('.button_plus'),
    decreaseBtn = document.querySelector('.button_minus'),
    countArea = document.querySelector('.count');


orderBtn.forEach(item => {
  item.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
    document.body.style.overflow = "hidden"
  })
})

closePopupBtn.addEventListener('click', () => {
  popUp.classList.toggle('hidden')
  document.body.style.overflow = ""
})

let count = 1;
increaseBtn.addEventListener('click', () => {
  count += 1
  countArea.innerHTML = `${count} шт.`
})

decreaseBtn.addEventListener('click', () => {
  if(count > 0){
    count = count - 1;
    countArea.innerHTML = `${count} шт.`
  } return;
})

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


const menuIconOpen = document.querySelector('.header__menu'),
  asideMenu = document.querySelector('.aside-menu'),
  menuIconClose = document.querySelector('#menu-close-icon'),
  menuLinks = document.querySelectorAll('.aside-menu a');


/**
 * Открытие меню
 */
menuIconOpen.addEventListener('click', () => {
  asideMenu.classList.add('open');
  document.body.classList.add('fixed');
});

/**
 * Закрытие меню
 */
menuIconClose.addEventListener('click', () => {
  asideMenu.classList.remove('open');  
});

asideMenu.addEventListener('transitionend', (event) => {
  if (!asideMenu.classList.contains('open')) {
    document.body.classList.remove('fixed');
  }  
})

/**
 * Скролл к блоку по нажатию на ссылку в меню
 */
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const className = e.target.getAttribute('data-id'),
      blockToScroll = document.querySelector(`.${className}`);

    if (!blockToScroll) {
      return;
    }

    asideMenu.classList.remove('open');  

    document.querySelector(`.${className}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
})

