import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "./refs/refs.js";
import MoviesApiService from "./MoviesApiService/moviesApiService.js";
import { errorCatch } from "./utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "./moviesGalleryCreate/galleryCreate.js";
import { clickCard } from "./modal.js"
import { onSearchFormSubmit } from "./onSubjectEvent/onSearchFormSubmit.js"
import { onGalleryCardClick } from "./onSubjectEvent/onGalleryCardClick.js";
import { onAddToWatchClick } from "./onSubjectEvent/onAddToWatchedClick.js";
import { onAddToHellClick } from "./onSubjectEvent/onAddToHellClick.js";
import { onHomeBtnClick } from "./onSubjectEvent/onHomeBtnClick.js";
import { popularMoviesLoad } from "./moviesLoad/popularMoviesLoad.js";
import { searchMoviesLoad } from "./moviesLoad/searchMoviesLoad.js";
import { idMovieLoad } from "./moviesLoad/idMovieLoad";
import { storageGalleryCreate } from "./moviesGalleryCreate/starageGalleryCreate.js"
import { movieCardCreate, movieCardClean } from "./moviesGalleryCreate/movieCardCreate.js";
import { notiflixOptions, notiflixReportOptions } from "./utils/notiflixOptions.js";

const moviesApiService = new MoviesApiService();
popularMoviesLoad();

refs.searchFormRef.addEventListener('submit', onSearchFormSubmit);
refs.cardList.addEventListener('click', onGalleryCardClick);
refs.headerHomeRef.addEventListener('click', onHomeBtnClick);

export { moviesApiService };