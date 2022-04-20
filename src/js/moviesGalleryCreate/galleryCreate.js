import { refs } from '../refs/refs';

import noPoster from '/images/no-pictures.png';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

function galleryCollectionCreate(data, dataGen) {
  refs.cardList.insertAdjacentHTML(
    'beforeend',
    data
      .map(({ genre_ids, id, overview, poster_path, release_date, title }) => {
        let ganresArrey = [];
        genre_ids.map(genre_id => {
          ganresArrey.push(dataGen.find(genere => genere.id === genre_id).name);
          return ganresArrey;
        });
        const genres = ganresArrey.join(', ');
        let movieGenresList = genres;
        let movieOverviev = overview;
        let moviePoster = BASE_POSTER_URL + poster_path;
        const numbLen = overview.trim().split(' ').length;
        if (numbLen === '') {
          movieOverviev = 'Sory there is no overview of that movie';
        } else if (numbLen < 3 || numbLen > 100) {
          movieOverviev = 'Click to watch more';
        }
        if (movieGenresList === '') {
          movieGenresList = 'UnKnown genre';
        }
        if (movieGenresList === '') {
          movieGenresList = 'UnKnown genre';
        }
        if (!poster_path) {
          moviePoster = noPoster;
        }

        return `
                        <li class="item">
                            <article class="card">
                                <div class="card-thumb cards-wrapper no-poster">
                                    <img src="${moviePoster}" alt="${title}" onerror="this.style.visibility = 'hidden'" loading="lazy" />
                                </div>
                                <div class="card-content">
                                    <h2 class="card-heading"> ${title} </h2>
                                    <p class="card-text"> ${movieGenresList} <span class="card-text-divide">|</span> ${release_date.slice(
          0,
          4,
        )} </p>
                                </div>
                                <div class="cards-back-text">
                                    <span class="description_films" data-id="${id}"> ${movieOverviev} </span>
                                </div>
                            </article>
                        </li>
                    `;
      })
      .join(''),
  );
}

function galleryClean() {
  refs.cardList.innerHTML = '';
}

export { galleryCollectionCreate, galleryClean };
