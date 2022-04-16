import changeHeaderStyles from './changeHeaderStyles';
import { refs } from '../refs/refs';

export default async function onHomeClick(e) {
  e.preventDefault();

  if (e.currentTarget.className.includes('current-link')) return;

  const btnWrapperRef = document.querySelector('.btn-wrapper');

  btnWrapperRef.classList.add('animate__animated', 'animate__slideOutDown');
  btnWrapperRef.remove();
  refs.searchFormRef.style.display = 'block';
  changeHeaderStyles();
  refs.searchFormRef.classList.add('animate__animated', 'animate__slideInDown');
}
