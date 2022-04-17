import animateCSS from './animateCSS';
import { onHomeBtnClick } from '../onSubjectEvent/onHomeBtnClick.js';
import { refs } from '../refs/refs';

export default function onLogoClick(e) {
  e.preventDefault();

  if (refs.headerHomeRef.className.includes('current-link')) {
    animateCSS('.header-logo', 'headShake');
    return;
  }

  onHomeBtnClick(e);
}
