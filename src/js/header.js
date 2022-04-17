import 'animate.css';
import animateCSS from './header/animateCSS';
import onLogoClick from './header/onLogoClick';
import onMyLibraryClick from './header/onMyLibraryClick';
import { refs } from './refs/refs';


refs.headerMyLibraryRef.addEventListener('click', onMyLibraryClick);
// refs.headerLogoRef.addEventListener('click', onLogoClick);

refs.headerMyLibraryRef.addEventListener('mousedown', e => e.preventDefault());
refs.headerHomeRef.addEventListener('mousedown', e => e.preventDefault());
refs.headerLogoRef.addEventListener('mousedown', e => e.preventDefault());

animateCSS('.header-logo', 'backInLeft');
