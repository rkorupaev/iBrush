import {swiper} from "./swiper";
import {moveIntroText} from "./changeBlockPosition";
import {fixLabel} from "./fixLabel";
import {choicesConfig} from "./choivesConfig";


window.onload = () => {
  moveIntroText();
};
window.addEventListener(`resize`, moveIntroText);
fixLabel();
choicesConfig();
swiper(`.swiper-container`);

