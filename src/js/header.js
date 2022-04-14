import 'animate.css';
import onHomeClick from './header/onHomeClick';
import onLogoClick from './header/onLogoClick';
import onMyLibraryClick from './header/onMyLibraryClick';

const headerMyLibraryRef = document.querySelector('#header-myLibrary');
const headerHomeRef = document.querySelector('#header-home');
const searchFormRef = document.querySelector('#search-form');
const headerContainerRef = document.querySelector('.header-container');
const headerLogoRef = document.querySelector('.header-logo');

headerMyLibraryRef.addEventListener('click', onMyLibraryClick);
headerHomeRef.addEventListener('click', onHomeClick);
headerLogoRef.addEventListener('click', onLogoClick);

headerMyLibraryRef.addEventListener('mousedown', e => e.preventDefault());
headerHomeRef.addEventListener('mousedown', e => e.preventDefault());
headerLogoRef.addEventListener('mousedown', e => e.preventDefault());
