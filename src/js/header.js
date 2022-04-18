import 'animate.css';
import animateCSS from './header/animateCSS';
import onHomeClick from './header/onHomeClick';
import onLogoClick from './header/onLogoClick';
import onMyLibraryClick from './header/onMyLibraryClick';
import onSearchFormSubmit from './header/onSearchFormSubmit';
const headerMyLibraryRef = document.querySelector('#header-myLibrary');
const headerHomeRef = document.querySelector('#header-home');
const headerLogoRef = document.querySelector('.header-logo');
const formRef = document.querySelector('#search-form');

formRef.addEventListener('submit', onSearchFormSubmit);
headerMyLibraryRef.addEventListener('click', onMyLibraryClick);
headerHomeRef.addEventListener('click', onHomeClick);
headerLogoRef.addEventListener('click', onLogoClick);

headerMyLibraryRef.addEventListener('mousedown', e => e.preventDefault());
headerHomeRef.addEventListener('mousedown', e => e.preventDefault());
headerLogoRef.addEventListener('mousedown', e => e.preventDefault());

animateCSS('.header-logo', 'backInLeft');
