import onHomeClick from './header/onHomeClick';
import onLogoClick from './header/onLogoClick';
import onMyLibraryClick from './header/onMyLibraryClick';
import onSearchFormSubmit from './header/onSearchFormSubmit';

const headerMyLibraryRef = document.querySelector('#header-myLibrary');
const headerHomeRef = document.querySelector('#header-home');
const searchFormRef = document.querySelector('#search-form');
const headerContainerRef = document.querySelector('.header-container');
const headerLogoRef = document.querySelector('.header-logo');
const formRef = document.querySelector('#search-form');

formRef.addEventListener('submit', onSearchFormSubmit);
headerMyLibraryRef.addEventListener('click', onMyLibraryClick);
headerHomeRef.addEventListener('click', onHomeClick);
headerLogoRef.addEventListener('click', onLogoClick);
