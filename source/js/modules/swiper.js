// swiper initiation
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

export const swiper = (element) => {
  return new SwiperCore(element, {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};
