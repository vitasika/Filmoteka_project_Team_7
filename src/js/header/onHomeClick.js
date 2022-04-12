import changeHeaderStyles from './changeHeaderStyles';

export default function onHomeClick(e) {
  e.preventDefault();

  if (e.currentTarget.className.includes('current-link')) return;

  const btnWrapperRef = document.querySelector('.btn-wrapper');
  const searchFormRef = document.querySelector('#search-form');

  btnWrapperRef.remove();
  changeHeaderStyles();
  searchFormRef.style.display = 'block';
}
