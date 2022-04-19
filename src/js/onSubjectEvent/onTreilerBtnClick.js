import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { setOnDatabase } from '../firebase/firebaseAuth';
import { getOnDatabase } from '../firebase/firebaseAuth';
import { videoFrameCreate, videoFrameClean } from "../moviesGalleryCreate/videoFrameCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onTreilerBtnClick(evt) {
    refs.modalTrailer.classList.remove('modal-trailer--hidden');
    videoFrameClean();
    videoFrameCreate(moviesApiService.dataStorageObj.movieKey);
}
export { onTreilerBtnClick };