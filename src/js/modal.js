import { refs } from './refs/refs';

refs.buttonClose.addEventListener('click', onClickCloseButton);

// refs.cardList.addEventListener('click', onClickCard);

function clickCard(e) {
  e.preventDefault();
  if (!e.target.classList.contains('description_films')) {
    return;
  }
  deleteScroll();
  refs.modalEl.classList.remove('modal-window--hidden');
  window.addEventListener('keydown', OnCloseModalEsc);
  refs.modalEl.addEventListener('click', onClickBackdrop);
}

function onClickCloseButton() {
  refs.modalEl.classList.add('modal-window--hidden');
  removeScroll();
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('backdrop')) {
    refs.modalEl.classList.add('modal-window--hidden');
    removeScroll();
  }
}

function OnCloseModalEsc(e) {
  if (e.code === 'Escape') {
    refs.modalEl.classList.add('modal-window--hidden');
    window.removeEventListener('keydown', OnCloseModalEsc);
    removeScroll();
  }
}

function getBodyScrollTop() {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.ScrollTop) ||
    (document.body && document.body.scrollTop)
  );
}

function removeScroll() {
  refs.bodyEl.classList.remove('body-lock');
  window.scrollTo(0, refs.bodyEl.dataset.scrollY);
}

function deleteScroll() {
  refs.bodyEl.dataset.scrollY = getBodyScrollTop();
  refs.bodyEl.style.top = `-${refs.bodyEl.dataset.scrollY}px`;
  refs.bodyEl.classList.add('body-lock');
}

export { clickCard };
