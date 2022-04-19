import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { clickCard } from "../modal.js"
import { idMovieLoad } from "../moviesLoad/idMovieLoad.js";
import { onTreilerBtnClick } from "./onTreilerBtnClick.js";
import { movieCardCreate, movieCardClean } from "../moviesGalleryCreate/movieCardCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function onGalleryCardClick(evt) {
    if (!evt.target.classList.contains('description_films')) {
        return;
    }

    moviesApiService.movie_id = evt.target.dataset.id;
    await idMovieLoad(evt);

    const addToWatchedBtn = document.querySelector('button[data-add="watched"]');
    const addToHellBtn = document.querySelector('button[data-add="queue"]');
    // const trailerBtn = document.querySelector('button[data-tre="treiler"]');
    // trailerBtn.addEventListener('click', onTreilerBtnClick);
    const savedData = localStorage.getItem('saved-data');
    if (!savedData) {
        return;
    };
    const newDataId = moviesApiService.dataStorageObj;
    const data = JSON.parse(savedData);
    if (data.watched.some(value => value.movieId_card === newDataId.movieId_card)) {
        addToWatchedBtn.textContent = "WATCHED";
        addToWatchedBtn.style.backgroundColor = "#FF6B01";
        addToWatchedBtn.style.color = "#FFFFFF";
        addToWatchedBtn.style.borderColor = "#FF6B01";
        // addToWatchedBtn.disabled = true;
        addToHellBtn.disabled = false;
    } else {
        addToWatchedBtn.disabled = false;
        addToWatchedBtn.style.backgroundColor = "#FFFFFF";
        addToWatchedBtn.style.color = "#000000";
        addToWatchedBtn.style.borderColor = "#000000";
        addToWatchedBtn.textContent = "ADD TO WATCHED";
    };

    if (data.hell.some(value => value.movieId_card === newDataId.movieId_card)) {
        addToHellBtn.textContent = "IN WATCHLIST";
        addToHellBtn.style.backgroundColor = "#FF6B01";
        addToHellBtn.style.color = "#FFFFFF";
        addToHellBtn.style.borderColor = "#FF6B01";
        // addToHellBtn.disabled = true;
        addToHellBtn.disabled = false;
    } else {
        addToHellBtn.textContent = "ADD TO WATCHLIST";
        addToHellBtn.style.backgroundColor = "#FFFFFF";
        addToHellBtn.style.color = "#000000";
        addToHellBtn.style.borderColor = "#000000";
        addToHellBtn.disabled = false;
    };

    // console.log("ID=", moviesApiService.movie_id);
}

export { onGalleryCardClick };