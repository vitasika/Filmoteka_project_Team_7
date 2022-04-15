import changeHeaderStyles from './changeHeaderStyles';

export default async function onHomeClick(e) {
  e.preventDefault();

  if (e.currentTarget.className.includes('current-link')) return;

  const btnWrapperRef = document.querySelector('.btn-wrapper');
  const searchFormRef = document.querySelector('#search-form');

  btnWrapperRef.classList.add('animate__animated', 'animate__slideOutDown');
  setTimeout(() => {
    btnWrapperRef.remove();
    searchFormRef.style.display = 'block';
    changeHeaderStyles();
    searchFormRef.classList.add('animate__animated', 'animate__slideInDown');
  }, 300);
}
