// input label on top
export const fixLabel = () => {
  const inputWrapper = document.querySelector(`.form__top-wrapper`);
  inputWrapper.addEventListener(`input`, (evt) => {
    if (evt.target.value.length !== 0) {
      evt.target.previousElementSibling.classList.add(`form__input-label--fixed-on-top`);
    } else {
      evt.target.previousElementSibling.classList.remove(`form__input-label--fixed-on-top`);
    }
  });
};


