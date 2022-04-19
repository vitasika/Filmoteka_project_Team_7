import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "../moviesGalleryCreate/galleryCreate.js";
import { storageGalleryCreate } from "../moviesGalleryCreate/starageGalleryCreate.js";
import { setOnDatabase } from '../firebase/firebaseAuth';
import { getOnDatabase } from '../firebase/firebaseAuth';
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onHellBtnClick(evt) {
    const watchedBtn = document.querySelector('button[data-load="watch"]');
    const qeueBtn = document.querySelector('button[data-load="qeue"]');
    watchedBtn.style.backgroundColor = "transparent";
    watchedBtn.style.color = "#FFFFFF";
    watchedBtn.style.borderColor = "#FFFFFF";
    qeueBtn.style.backgroundColor = "#FF6B01";
    qeueBtn.style.color = "#FFFFFF";
    qeueBtn.style.borderColor = "#FF6B01";

    const savedData = localStorage.getItem('saved-data');
    // const savedData = await getOnDatabase();
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