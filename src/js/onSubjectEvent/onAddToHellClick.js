import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onAddToHellClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    const addToHellBtn = document.querySelector('button[data-add="queue"]');
    if (!savedData) {
        const idStorage = {
            watched: [],
            hell: [],
        };

        idStorage.hell.push(moviesApiService.dataStorageObj);
        localStorage.setItem('saved-data', JSON.stringify(idStorage));
        addToHellBtn.textContent = "IN WATCHLIST";
        addToHellBtn.style.backgroundColor = "#FF6B01";
        addToHellBtn.style.color = "#FFFFFF";
        addToHellBtn.style.borderColor = "#FF6B01";
        // addToHellBtn.disabled = true;
    } else {
        const newDataId = moviesApiService.dataStorageObj;
        const data = JSON.parse(savedData);
        if (data.hell.some(value => value.movieId_card === newDataId.movieId_card)) {
            data.hell = data.hell.filter(value => value.movieId_card !== newDataId.movieId_card);
            localStorage.setItem('saved-data', JSON.stringify(data));
            addToHellBtn.textContent = "ADD TO WATCHLIST";
            addToHellBtn.style.backgroundColor = "#FFFFFF";
            addToHellBtn.style.color = "#000000";
            addToHellBtn.style.borderColor = "#000000";
            // addToHellBtn.disabled = true;
            return;
        };
        data.hell.push(newDataId);
        localStorage.setItem('saved-data', JSON.stringify(data));
        addToHellBtn.textContent = "IN WATCHLIST";
        addToHellBtn.style.backgroundColor = "#FF6B01";
        addToHellBtn.style.color = "#FFFFFF";
        addToHellBtn.style.borderColor = "#FF6B01";
        // addToHellBtn.disabled = true;
    }
}

export { onAddToHellClick };