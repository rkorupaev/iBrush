import {swiper} from "./swiper";

swiper(`.swiper-container`);

import Choices from "choices.js";

const test = () => {
  const element = document.querySelector(`.form__select`);
  const choices = new Choices(element, {
    placeholder: false,
    itemSelectText: ``,
    searchEnabled: false,
    classNames: {
      containerOuter: `choices input--top-block form__select`,
      containerInner: `choices__inner form__select-inner`,
      item: `choices__item form__select-item`
    }
  });
};

test();
