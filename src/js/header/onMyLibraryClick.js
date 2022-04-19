import addBtnMarkup from './addBtnMarkup';
import changeHeaderStyles from './changeHeaderStyles';
import { refs } from '../refs/refs';
import { onWatchedBtnClick } from '../onSubjectEvent/onWatchedBtnClick.js';
import { onHellBtnClick } from '../onSubjectEvent/onHellBtnClick.js';

// export default function onMyLibraryClick(e) {
//   e.preventDefault();

//   refs.searchFormRef.classList.add('animate__animated', 'animate__slideOutDown');
//   refs.searchFormRef.style.display = 'none';
//   changeHeaderStyles();
//   addBtnMarkup();
//   refs.searchFormRef.classList.remove('animate__animated', 'animate__slideOutDown');
//   refs.headerMyLibraryRef.removeEventListener('click', onMyLibraryClick);
//   const watchedBtn = document.querySelector('button[data-load="watch"]');
//   const qeueBtn = document.querySelector('button[data-load="qeue"]');
//   watchedBtn.addEventListener('click', onWatchedBtnClick);
//   qeueBtn.addEventListener('click', onHellBtnClick);
// }

export default function onMyLibraryClick(e) {
  e.preventDefault();

  if (e.currentTarget.className.includes('current-link')) return;

  refs.searchFormRef.classList.add('animate__animated', 'animate__slideOutDown');
  refs.searchFormRef.style.display = 'none';
  refs.searchFormRef.classList.remove('animate__animated', 'animate__slideOutDown');

  changeHeaderStyles();
  addBtnMarkup();

  const watchedBtn = document.querySelector('button[data-load="watch"]');
  const qeueBtn = document.querySelector('button[data-load="qeue"]');
  watchedBtn.addEventListener('click', onWatchedBtnClick);
  qeueBtn.addEventListener('click', onHellBtnClick);
  watchedBtn.style.backgroundColor = "transparent";
  watchedBtn.style.color = "#FFFFFF";
  watchedBtn.style.borderColor = "#FFFFFF";
  qeueBtn.style.backgroundColor = "transparent";
  qeueBtn.style.color = "#FFFFFF";
  qeueBtn.style.borderColor = "#FFFFFF";

}
