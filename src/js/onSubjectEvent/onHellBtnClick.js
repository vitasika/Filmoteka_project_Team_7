import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "../moviesGalleryCreate/galleryCreate.js";
import { storageGalleryCreate } from "../moviesGalleryCreate/starageGalleryCreate.js"
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onHellBtnClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    if (!savedData) {
        Notiflix.Notify.success('Sorry, there are no added movies.');
        return;
    } else if (JSON.parse(savedData).hell.length === 0) {
        Notiflix.Notify.success('Sorry, there are no added movies.');
        return;
    }; 

    const dataArray = JSON.parse(savedData).hell;
    // console.log(dataArray);

    galleryClean();
    storageGalleryCreate(dataArray);
    if (!refs.paginationConteiner.classList.contains("paginationNone")) {
        return refs.paginationConteiner.classList.add("paginationNone");
    };
}

export { onHellBtnClick };