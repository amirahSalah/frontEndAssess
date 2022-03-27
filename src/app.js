import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CountUp } from "../node_modules/countup.js/dist/countUp.min.js";
//START usable funcitons
const counterUpInit = (id, num) => {
  let countUp = new CountUp(id, num, {
    enableScrollSpy: true,
  });
};
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
const progressBarInit = () => {
  let progress_list = document.querySelectorAll(".progress-bar-animated");
  for (let progress of progress_list) {
    let progressValue = parseInt(progress.getAttribute("aria-valuenow"));
    progress.style.width = progressValue + "%";
  }
};
//END usable funcitons

window.onload = function () {
  //START Count up for facts & figures section
  let count_list = document.querySelectorAll(".factsFigures__box__num");
  for (let count of count_list) {
    let countNumber = parseInt(count.innerHTML);
    counterUpInit(count.id, countNumber);
  }
  //END Count up for facts & figures section

  //START Progress bars animation
  const progress_section = document.querySelector(".about__progresses");
  document.addEventListener(
    "scroll",
    function () {
      isInViewport(progress_section) ? progressBarInit() : false;
    },
    {
      passive: true,
    }
  );
  //END Progress bars animation
};
