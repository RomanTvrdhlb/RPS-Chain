import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleCustomClass, removeCustomClass, addCustomClass, removeClassInArray} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, header, navLinks, footer} = vars;

const currentPage = window.location.pathname.slice(1);

if(currentPage === 'referral.html'){
  toggleCustomClass(footer);
}

if(navLinks){
  navLinks.forEach(function(link) {
      const value = link.getAttribute('href');

      if (currentPage === value) { 
        addCustomClass(link);
      }
  });
}

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
    e.target.classList.contains('overlay') ?
    hideMenuHandler(overlay,mobileMenu,burger) : null
  });
}





