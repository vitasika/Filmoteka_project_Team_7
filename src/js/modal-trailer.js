import { refs } from './refs/refs';
import { videoFrameCreate, videoFrameClean } from "./moviesGalleryCreate/videoFrameCreate.js";

refs.closeTrailer.addEventListener('click', closeModalTrailer);

function closeModalTrailer() {
  videoFrameClean();
  refs.modalTrailer.classList.add('modal-trailer--hidden');
}

export { closeModalTrailer };
