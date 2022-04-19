import { refs } from './refs/refs';

refs.closeTrailer.addEventListener('click', closeModalTrailer);

function closeModalTrailer() {
  refs.modalTrailer.classList.add('modal-trailer--hidden');
}
