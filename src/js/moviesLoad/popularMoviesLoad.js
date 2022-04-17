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

async function popularMoviesLoad() {
    
    try {
        const dataGenresList = await moviesApiService.fetchGenresList(); // данные из API по запросу "жанры" (объект - { genres: (19) […] })
        galleryClean();
        moviesApiService.resetPage();
        const dataMoviesPopular = await moviesApiService.fetchMoviesPopular(); // данные из API по запросу "популярные фильмы" (объект - { page: 1, results: (20) […], total_pages: 33054, total_results: 661074 })
        const dataGenres = dataGenresList.genres; // массив объектов [{ id: 28, name: "Action" } ..... { id: 76, name: "Horor" }]
        const dataMoviesPop = dataMoviesPopular.results; // массив объектов фильмов [{ adult: false, backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg", id: 406759, … } ...]
        // console.log(dataMoviesPop);
        // console.log(dataGenresList);
        // console.log(dataGenres);
        
        galleryCollectionCreate(dataMoviesPop, dataGenres);

        const pagination = new Pagination('pagination', options);
        pagination.on('afterMove', async e => {
            galleryClean();
            const { page } = e;
            moviesApiService.page = page;
            const dataMoviesPopular = await moviesApiService.fetchMoviesPopular(); // данные из API по запросу "популярные фильмы" (объект - { page: 1, results: (20) […], total_pages: 33054, total_results: 661074 })
            const dataGenres = dataGenresList.genres; // массив объектов [{ id: 28, name: "Action" } ..... { id: 76, name: "Horor" }]
            const dataMoviesPop = dataMoviesPopular.results; // массив объектов фильмов [{ adult: false, backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg", id: 406759, … } ...]
            // console.log(dataMoviesPop);
            // console.log(dataGenresList);
            // console.log(dataGenres);
        
            galleryCollectionCreate(dataMoviesPop, dataGenres);
        });

    } catch (error) {
        errorCatch(error);
    };
};

export { popularMoviesLoad };