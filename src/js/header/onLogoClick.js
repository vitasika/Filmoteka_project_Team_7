import animateCSS from './animateCSS';
import onHomeClick from './onHomeClick';

const headerHomeRef = document.querySelector('#header-home');

export default function onLogoClick(e) {
  e.preventDefault();

  if (headerHomeRef.className.includes('current-link')) {
    animateCSS('.header-logo', 'headShake');
    return;
  }

  onHomeClick(e);
}
