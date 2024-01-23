import Splide from "../vendor/splide";
import vars from '../_vars';
const {mainSlider, jackpotSlider, casinoSlider} = vars;

jackpotSlider && new Splide( jackpotSlider, {
  type   : 'slide',
  perPage: 4,
  speed:1200,
  gap: 14,
  pagination:false,
  mediaQuery: 'min',
  breakpoints: {
    280: {
      perPage: '1',
		},
    414: {
      perPage: '2',
		},
    576: {
      perPage: 3,
		},
   
		768: {
      arrows:false,
			drag:false,
      perPage: 4,
		},
  }
} ).mount();

casinoSlider && new Splide( casinoSlider, {
  type   : 'slide',
  perPage: 5,
  speed:1200,
  gap: 14,
  pagination: false,
  mediaQuery: 'min',
  breakpoints: {
    280: {
      perPage: '1',
		},
    414: {
      perPage: '2',
		},
    576: {
      perPage: 3,
		},
    768: {
      perPage: 4,
		},
		1024: {
      arrows:false,
			drag:false,
      perPage: 5,
		},
  }
} ).mount();

mainSlider && new Splide( mainSlider, {
  type   : 'loop',
  perPage: 1,
  speed:1200,
  gap: 14,
  pagination: false,
  autoplay: true,
} ).mount();
