import animateCSS from './animateCSS';
import { onHomeBtnClick } from '../onSubjectEvent/onHomeBtnClick.js';
import { refs } from '../refs/refs';
import { popularMoviesLoad } from '../moviesLoad/popularMoviesLoad';

export default function onLogoClick(e) {
  e.preventDefault();

  if (refs.headerHomeRef.className.includes('current-link')) {
    popularMoviesLoad();

    animateCSS('.header-logo', 'headShake');
    return;
  }

  onHomeBtnClick(e);
}
