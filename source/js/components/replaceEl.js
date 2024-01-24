import vars from "../_vars";
import { throttle } from "../functions/throttle";

const {
 rewardsImage,rewardsParent,table, tableParent
} = vars;

const rewardsParentMob = rewardsParent.querySelector('.main-top'),
      tableParentMob = tableParent.querySelector('.main-top');
const replaceElementsFunction = (
  element,
  parentDesktop,
  parentMobile,
  breakpoint,
  firstRule,
  lastRule
) => {
  let containerWidth = document.documentElement.clientWidth;

  if (element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    }
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
};

window.addEventListener("resize", () => {
  throttle(
    replaceElementsFunction(
      rewardsImage,
      rewardsParent,
      rewardsParentMob,
      414,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      table,
      tableParent,
      tableParentMob,
      414,
    "beforeend",
    "afterbegin"
    )
  );
});
window.addEventListener("DOMContentLoaded", () => {
  throttle(
    replaceElementsFunction(
      rewardsImage,
      rewardsParent,
      rewardsParentMob,
      414,
    "beforeend",
    "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      table,
      tableParent,
      tableParentMob,
      414,
    "beforeend",
    "afterbegin"
    )
  );
});


// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.
