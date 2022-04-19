import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { setOnDatabase } from '../firebase/firebaseAuth';
import { getOnDatabase } from '../firebase/firebaseAuth';
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onAddToHellClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    // const savedData = await getOnDatabase();
    const addToHellBtn = document.querySelector('button[data-add="queue"]');
    if (!savedData) {
        const idStorage = {
            watched: [],
            hell: [],
        };

        idStorage.hell.push(moviesApiService.dataStorageObj);
        localStorage.setItem('saved-data', JSON.stringify(idStorage));
        // const data = JSON.stringify(idStorage);
        // await setOnDatabase(data);
        addToHellBtn.textContent = "IN WATCHLIST";
        addToHellBtn.style.backgroundColor = "#FF6B01";
        addToHellBtn.style.color = "#FFFFFF";
        addToHellBtn.style.borderColor = "#FF6B01";
    } else {
        const newDataId = moviesApiService.dataStorageObj;
        const data = JSON.parse(savedData);
        if (data.hell.some(value => value.movieId_card === newDataId.movieId_card)) {
            data.hell = data.hell.filter(value => value.movieId_card !== newDataId.movieId_card);
            localStorage.setItem('saved-data', JSON.stringify(data));
            // await setOnDatabase(JSON.stringify(data));
            addToHellBtn.textContent = "ADD TO WATCHLIST";
            addToHellBtn.style.backgroundColor = "#FFFFFF";
            addToHellBtn.style.color = "#000000";
            addToHellBtn.style.borderColor = "#000000";
            return;
        };
        data.hell.push(newDataId);
        localStorage.setItem('saved-data', JSON.stringify(data));
        // await setOnDatabase(JSON.stringify(data));
        addToHellBtn.textContent = "IN WATCHLIST";
        addToHellBtn.style.backgroundColor = "#FF6B01";
        addToHellBtn.style.color = "#FFFFFF";
        addToHellBtn.style.borderColor = "#FF6B01";
    }
}

export { onAddToHellClick };