//  change block position in mobile
export const moveIntroText = () => {
  const introText = document.querySelector(`.intro-block__text`);
  const introBlock = document.querySelector(`.intro-block`);
  const introImageContainer = document.querySelector(`.intro-block__image-wrapper`);

  if (window.innerWidth <= 767) {
    introBlock.insertBefore(introText, introImageContainer);
  } else {
    introImageContainer.after(introText);
  }
};


