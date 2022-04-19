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

async function onWatchedBtnClick(evt) {
    const watchedBtn = document.querySelector('button[data-load="watch"]');
    const qeueBtn = document.querySelector('button[data-load="qeue"]');
    qeueBtn.style.backgroundColor = "transparent";
    qeueBtn.style.color = "#FFFFFF";
    qeueBtn.style.borderColor = "#FFFFFF";
    watchedBtn.style.backgroundColor = "#FF6B01";
    watchedBtn.style.color = "#FFFFFF";
    watchedBtn.style.borderColor = "#FF6B01";

    const savedData = localStorage.getItem('saved-data');
    // const savedData = await getOnDatabase();
    // const saveData = savData[0];
    // console.log("savedData -",savedData)
    if (!savedData) {
        Notiflix.Notify.success('Sorry, there are no added movies.');
        return;
    } else if (JSON.parse(savedData).watched.length === 0) {
        Notiflix.Notify.success('Sorry, there are no added movies.');
        return;
    }; 

    const dataArray = JSON.parse(savedData).watched;
    // console.log(dataArray);

    galleryClean();
    storageGalleryCreate(dataArray);
    
    if (!refs.paginationConteiner.classList.contains("paginationNone")) {
        return refs.paginationConteiner.classList.add("paginationNone");
    };
}

export { onWatchedBtnClick };