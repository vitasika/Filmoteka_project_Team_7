const modalEl = document.querySelector('[data-modal]');

const buttonClose = document.querySelector('.modal__close-button');

const elem = document.querySelector('.card-thumb');

buttonClose.addEventListener('click', toggleModal);

elem.addEventListener('click', toggleModal);

function toggleModal() {
  modalEl.classList.toggle('is-hidden');
  window.addEventListener('keydown', OnCloseModalEsc);
}

function OnCloseModalEsc(e) {
  if (e.code === 'Escape') {
    modalEl.classList.add('is-hidden');
    window.removeEventListener('keydown', OnCloseModalEsc);
  }
}
