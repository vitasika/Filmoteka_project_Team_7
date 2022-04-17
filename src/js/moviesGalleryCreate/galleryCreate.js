import { refs } from '../refs/refs';

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

function galleryCollectionCreate(data,dataGen) {
    refs.cardList.insertAdjacentHTML('beforeend',
        (data.map(({ genre_ids, id, overview, poster_path, release_date, title }) => {
            let ganresArrey = [];
            genre_ids.map((genre_id) => {
                ganresArrey.push(dataGen.find(genere => genere.id === genre_id).name);
                return ganresArrey;
            });
            const genres = ganresArrey.join(', ');
            return `
                        <li class="item">
                            <article class="card">
                                <div class="card-thumb cards-wrapper">
                                    <img src="${BASE_POSTER_URL}${poster_path}" alt="${title}" loading="lazy" />
                                </div>
                                <div class="card-content">
                                    <h2 class="card-heading"> ${title} </h2>
                                    <p class="card-text"> ${genres} <span class="card-text-divide">|</span> ${release_date.slice(0, 4)} </p>
                                </div>
                                <div class="cards-back-text">
                                    <span class="description_films" data-id="${id}"> ${overview} </span>
                                </div>
                            </article>
                        </li>
                    `;
        }).join('')));
};

function galleryClean() {
    refs.cardList.innerHTML = '';
};

export { galleryCollectionCreate, galleryClean };