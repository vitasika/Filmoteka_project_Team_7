import onHomeClick from './onHomeClick';

const headerHomeRef = document.querySelector('#header-home');

export default function onLogoClick(e) {
  e.preventDefault();

  if (headerHomeRef.className.includes('current-link')) return;

  onHomeClick(e);
}
