const modalEl = document.querySelector('[data-modal]');

const buttonClose = document.querySelector('.modal__close-button');

const cardList = document.querySelector('.card-set');

buttonClose.addEventListener('click', onClickCloseButton);

cardList.addEventListener('click', onClickCard);

function onClickCard(e) {
  if (!e.target.classList.contains('description_films')) {
    return;
  }
  document.body.style.overflow = 'hidden';
  modalEl.classList.remove('modal-window--hidden');
  window.addEventListener('keydown', OnCloseModalEsc);
  modalEl.addEventListener('click', onClickBackdrop);
}

function onClickCloseButton() {
  modalEl.classList.add('modal-window--hidden');
  removeOverflow();
}

function onClickBackdrop(e) {
  e.target.classList.contains('backdrop') ? modalEl.classList.add('modal-window--hidden') : false;
  removeOverflow();
}

function OnCloseModalEsc(e) {
  if (e.code === 'Escape') {
    modalEl.classList.add('modal-window--hidden');
    removeOverflow();
    window.removeEventListener('keydown', OnCloseModalEsc);
  }
}

function removeOverflow() {
  document.body.style.overflow = '';
}
