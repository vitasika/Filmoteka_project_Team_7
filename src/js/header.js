import 'animate.css';
import animateCSS from './header/animateCSS';
import onHomeClick from './header/onHomeClick';
import onLogoClick from './header/onLogoClick';
import onMyLibraryClick from './header/onMyLibraryClick';
import onSearchFormSubmit from './header/onSearchFormSubmit';
import { refs } from './refs/refs';

refs.searchFormRef.addEventListener('submit', onSearchFormSubmit);
refs.headerMyLibraryRef.addEventListener('click', onMyLibraryClick);
refs.headerHomeRef.addEventListener('click', onHomeClick);
refs.headerLogoRef.addEventListener('click', onLogoClick);

refs.headerMyLibraryRef.addEventListener('mousedown', e => e.preventDefault());
refs.headerHomeRef.addEventListener('mousedown', e => e.preventDefault());
refs.headerLogoRef.addEventListener('mousedown', e => e.preventDefault());

animateCSS('.header-logo', 'backInLeft');
