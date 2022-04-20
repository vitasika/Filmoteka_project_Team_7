import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import { errorCatch } from "../utils/errorCatch.js";
import { searchMoviesLoad } from "../moviesLoad/searchMoviesLoad.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function onSearchFormSubmit(evt) {
    evt.preventDefault();
    
    const name = refs.inputEl.value.trim(); // текущее значение inputEl (текст введенный в inputEl), с игнорированием пробелов (trim())
    if (name === "") {
        return Notiflix.Notify.success('Please enter request.'); 
    };
    evt.target.reset();
    moviesApiService.resetPage();
    moviesApiService.searchQuery = name;
    try {
        await searchMoviesLoad();
        
    } catch (error) {
        errorCatch(error);
    };
};

export { onSearchFormSubmit };