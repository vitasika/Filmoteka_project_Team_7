import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "../moviesGalleryCreate/galleryCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {
    totalItems: 1000,
        itemsPerPage: 20,
        visiblePages: 7,
        centerAlign: false,
    page: 1,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
};

async function searchMoviesLoad() {
    
    galleryClean();

    try {
        const dataObj = await moviesApiService.fetchMoviesQuery();
        const dataMovies = dataObj.results;
        const dataGenresList = await moviesApiService.fetchGenresList(); // данные из API по запросу "жанры" (объект - { genres: (19) […] })
        const dataGenres = dataGenresList.genres;
        // console.log(dataObj);
        // console.log(dataMovies);
        if (dataMovies.length === 0) {
            return Notiflix.Notify.success('Sorry, there are no movies matching your search query.');  
        };

        galleryCollectionCreate(dataMovies, dataGenres);
        if (refs.paginationConteiner.classList.contains("paginationNone")) {
            refs.paginationConteiner.classList.remove("paginationNone");
        };

        const paginationSearch = new Pagination('pagination', options);
        paginationSearch.on('afterMove', async e => {
            galleryClean();
            const { page } = e;
            moviesApiService.page = page;
            const dataObj = await moviesApiService.fetchMoviesQuery();
            const dataMovies = dataObj.results;
            // console.log(dataObj);
            // console.log(dataMovies);
        
            galleryCollectionCreate(dataMovies, dataGenres);
        });
        
    } catch (error) {
        errorCatch(error);
    };
}

export { searchMoviesLoad };