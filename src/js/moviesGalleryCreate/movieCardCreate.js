import { refs } from "../refs/refs.js";

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

function movieCardCreate(data) {
    const { genres, homepage, id, original_title, overview, popularity, poster_path, title, vote_average, vote_count } = data;
    
    const genresString = genres.map((genre) => {
        return genre.name;
    }).join(', ');
    const cardString = `

                    <div class="modal-content" data-id="${id}">
                        <div class="modal-content__left">
                            <img src="${BASE_POSTER_URL}${poster_path}" alt="${title}" loading="lazy" />
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
                                                ${original_title}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="modal-content__primary-text primary-text--grey">Genre</p>
                                        </td>
                                        <td>
                                            <p class="modal-content__primary-text"> ${genresString} </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="modal-content__about-container">
                                <p class="modal-content__about-title modal-content__primary-text">about</p>
                                <p class="modal-content__primary-text primary-text--black modal-content__about-text-lh">
                                    ${overview}
                                </p>
                                
                            </div>
                            <div class="modal-content__container-btn">
                                <button type="button" class="btn btn--current" data-add="watched">ADD TO WATCHED</button>
                                <button type="button" class="btn btn--current-modal" data-add="queue">ADD TO WATCHLIST</button>
                            </div>
                        </div>
                    </div>
                `;
    refs.modalMovieCard.insertAdjacentHTML('beforeend', cardString)
};

function movieCardClean() {
    refs.modalMovieCard.innerHTML = '';
};

export { movieCardCreate, movieCardClean };