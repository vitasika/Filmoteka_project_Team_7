import addBtnMarkup from './addBtnMarkup';
import changeHeaderStyles from './changeHeaderStyles';

export default function onMyLibraryClick(e) {
  e.preventDefault();

  if (e.currentTarget.className.includes('current-link')) return;

  const searchFormRef = document.querySelector('#search-form');

  searchFormRef.style.display = 'none';
  changeHeaderStyles();
  addBtnMarkup();
}
