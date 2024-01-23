import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleCustomClass, removeCustomClass} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, header} = vars;

const mobileMenuHandler = function(overlay, mobileMenu, burger) {
    burger.addEventListener('click', function(e){
      e.preventDefault();
      toggleCustomClass(header, 'active')
      toggleCustomClass(mobileMenu);
      toggleCustomClass(burger);
      toggleCustomClass(overlay);
      burger.classList.contains('active') ? disableScroll() : enableScroll()
    })
}

const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu);
    removeCustomClass(burger);
    removeCustomClass(header, 'active');
    removeCustomClass(overlay);
    enableScroll()
}

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  overlay.addEventListener('click', function(e){
    e.target.classList.contains('h2o-overlay') ?
    hideMenuHandler(overlay,mobileMenu,burger) : null
  });
}





