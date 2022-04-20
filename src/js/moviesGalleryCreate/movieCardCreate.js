import { refs } from "../refs/refs.js";
import noPoster from '/images/no-pictures.png';

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

function movieCardCreate(data) {
    const { genres, id, original_title, overview, popularity, poster_path, title, vote_average, vote_count } = data;
    
    const genresString = genres.map((genre) => {
        return genre.name;
    }).join(', ');

    let movieOverviev = overview;
    if (movieOverviev === "") {
        movieOverviev = "Sory there is no overview of that movie";
    }

    let movieOriginalTitle = original_title;
    if (movieOriginalTitle === "") {
        movieOriginalTitle = "None";
    }

    let movieGenresString = genresString;
    if (movieGenresString === "") {
        movieGenresString = "None";
    }

    let moviePoster = BASE_POSTER_URL + poster_path;
    if (!poster_path) {
        moviePoster = noPoster;
    }
    console.log(moviePoster);

    const cardString = `

                    <div class="modal-content" data-id="${id}">
                        <div class="modal-content__left no-poster-modal">
                            <img src="${moviePoster}" alt="${title}" onerror="this.style.visibility = 'hidden'" loading="lazy" />
                        </div>
                        <div class="modal-content__right">
                            <h2 class="modal-content__film-title primary-text--black"> ${title} </h2>
                            <table class="modal-content__main-table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p class="modal-content__primary-text primary-text--grey">Vote / Votes</p>
                                        </td>
                                        <td>
                                            <p class="modal-content__primary-text primary-text--black">
                                                <span class="modal-content__vote"> ${vote_average} </span>
                                                <span class="modal-content__space"> / </span>
                                                ${vote_count}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="modal-content__primary-text primary-text--grey">Popularity</p>
                                        </td>
                                        <td>
                                            <p class="modal-content__primary-text primary-text--black"> ${popularity} </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="modal-content__primary-text primary-text--grey">Original Title</p>
                                        </td>
                                        <td>
                                            <p class="modal-content__primary-text modal-content__original-title primary-text--black">
                                                ${movieOriginalTitle}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="modal-content__primary-text primary-text--grey">Genre</p>
                                        </td>
                                        <td>
                                            <p class="modal-content__primary-text"> ${movieGenresString} </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="modal-content__about-container">
                                <p class="modal-content__about-title modal-content__primary-text">about</p>
                                <p class="modal-content__primary-text primary-text--black modal-content__about-text-lh">
                                    ${movieOverviev}
                                </p>
                                
                            </div>
                            <div class="modal-content__container-btn">
                                <button type="button" class="btn btn-modal" data-add="watched">ADD TO WATCHED</button>
                                <button type="button" class="btn btn-modal" data-add="queue">ADD TO WATCHLIST</button>
                            </div>
                            <button type="button" class="btn btn-modal" data-add="trailer">TRAILER</button>
                        </div>
                    </div>
                `;
    refs.modalMovieCard.insertAdjacentHTML('beforeend', cardString)
};

function movieCardClean() {
    refs.modalMovieCard.innerHTML = '';
};

export { movieCardCreate, movieCardClean };