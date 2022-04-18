import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from '../refs/refs.js';
import { moviesApiService } from '../moviesGallery.js';
import MoviesApiService from '../MoviesApiService/moviesApiService.js';
import { errorCatch } from '../utils/errorCatch.js';
import { galleryCollectionCreate, galleryClean } from '../moviesGalleryCreate/galleryCreate.js';
import { popularMoviesLoad } from '../moviesLoad/popularMoviesLoad.js';
import changeHeaderStyles from '../header/changeHeaderStyles.js';
import { notiflixOptions, notiflixReportOptions } from '../utils/notiflixOptions.js';

async function onHomeBtnClick(evt) {
  moviesApiService.resetPage();
  evt.preventDefault();
  popularMoviesLoad();

  if (evt.currentTarget.className.includes('current-link')) return;
  
  const btnWrapperRef = document.querySelector('.btn-wrapper');

  btnWrapperRef.classList.add('animate__animated', 'animate__slideOutDown');
  btnWrapperRef.remove();
  refs.searchFormRef.style.display = 'block';
  changeHeaderStyles();
  refs.searchFormRef.classList.add('animate__animated', 'animate__slideInDown');

  //   popularMoviesLoad();
}

export { onHomeBtnClick };
