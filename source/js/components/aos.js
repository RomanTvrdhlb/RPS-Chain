import AOS from 'aos';

window.addEventListener('load', initAOS);
window.addEventListener('resize', initAOS);

function initAOS(){
let containerWidth = document.documentElement.clientWidth;

  if (containerWidth > 576) {
    AOS.init({
        once: true,
    });
  } else {
    AOS.refreshHard();
  }
}
