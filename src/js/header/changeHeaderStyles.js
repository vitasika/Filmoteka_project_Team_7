const headerMyLibraryRef = document.querySelector('#header-myLibrary');
const headerHomeRef = document.querySelector('#header-home');
const headerContainerRef = document.querySelector('.header-container');
const headerRef = document.querySelector('.header');

export default function changeHeaderStyles() {
  headerRef.classList.toggle('header--bg-color');
  headerHomeRef.classList.toggle('current-link');
  headerMyLibraryRef.classList.toggle('current-link');
  headerContainerRef.classList.toggle('header-container--library');
}
