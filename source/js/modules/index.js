import {swiper} from "./swiper";

swiper(`.swiper-container`);

import Choices from "choices.js";

const choicesConfig = () => {
  const element = document.querySelector(`.form__select`);
  // eslint-disable-next-line no-unused-vars
  const choices = new Choices(element, {
    placeholder: false,
    itemSelectText: ``,
    searchEnabled: false,
    classNames: {
      containerOuter: `choices input--top-block form__select`,
      containerInner: `choices__inner form__select-inner`,
      item: `choices__item form__select-item`,
    },
  });
};

choicesConfig();


//  intro-block slider initiation
const MIN_LEFT = 0;
const introImage = document.querySelector(`.intro-block__image`);
const introImageContainer = document.querySelector(`.intro-block__image-wrapper`);
const introSlider = document.querySelector(`.intro-block__slider`);
const introSliderPin = document.querySelector(`.intro-block__slider-pin`);

console.log(introSliderPin.offsetLeft, `offset`);


// const sliderDelta = introSlider.offsetLeft;


if (introSliderPin) {
  introSliderPin.addEventListener(`mousedown`, (evt) => {
    let initLocationX = evt.clientX;
    let maxLeft = introSlider.offsetWidth - introSliderPin.offsetWidth;
    let maxImageLeft = introImage.offsetWidth - introImageContainer.offsetWidth;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      let shift = initLocationX - moveEvt.clientX;

      initLocationX = moveEvt.clientX;

      console.log(introSliderPin.offsetLeft, `offset`);
      console.log(shift, `shift`);

      introSliderPin.style.left = introSliderPin.offsetLeft - shift + `px`;

      // if (introSliderPin.offsetLeft <= MIN_LEFT) {
      //   introSliderPin.style.left = MIN_LEFT + `px`;
      // } else if (introSliderPin.offsetLeft >= maxLeft) {
      //   introSliderPin.style.left = maxLeft + `px`;
      // }
      //
      //   let countIndex = Math.floor(sliderPin.offsetLeft / devideIndex);
      //   if (countIndex < 0) {
      //     countIndex = 0;
      //   }
      //
      //   let changedExerciseArray = initialExerciseArray.slice(countIndex, countIndex + columnCount);
      //   let changedDayArray = initialDayArray.slice(countIndex, countIndex + columnCount);
      //
      //   addArrayClass(initialExerciseArray, `exercise-list--tablet`);
      //   addArrayClass(initialDayArray, `day-list__item--tablet`);
      //   removeArrayClass(changedExerciseArray, `exercise-list--tablet`);
      //   addArrayClass(changedExerciseArray, `popup`);
      //   removeArrayClass(changedDayArray, `day-list__item--tablet`);
      introImage.style.left = introImage.offsetLeft + shift + `px`;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
}

//  change block position in mobile
const moveIntroText = () => {
  const introText = document.querySelector(`.intro-block__text`);
  const introBlock = document.querySelector(`.intro-block`);
  if (window.innerWidth <= 767) {
    introBlock.insertBefore(introText, introImageContainer);
  } else {
    introImageContainer.after(introText);
  }
};
window.onload = () => {
  moveIntroText();
};
window.addEventListener(`resize`, moveIntroText);
