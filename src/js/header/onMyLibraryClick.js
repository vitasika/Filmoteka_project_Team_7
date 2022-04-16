import addBtnMarkup from './addBtnMarkup';
import changeHeaderStyles from './changeHeaderStyles';
import { refs } from '../refs/refs';

export default function onMyLibraryClick(e) {
  e.preventDefault();

  if (e.currentTarget.className.includes('current-link')) return;

  refs.searchFormRef.classList.add('animate__animated', 'animate__slideOutDown');
  refs.searchFormRef.style.display = 'none';
  changeHeaderStyles();
  addBtnMarkup();
  refs.searchFormRef.classList.remove('animate__animated', 'animate__slideOutDown');
}
