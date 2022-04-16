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
  document.body.style.paddingRight = `${getScrollBarWidth()}px`;
  modalEl.classList.remove('modal-window--hidden');
  window.addEventListener('keydown', OnCloseModalEsc);
  modalEl.addEventListener('click', onClickBackdrop);
}

function onClickCloseButton() {
  modalEl.classList.add('modal-window--hidden');
  addTransition();
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('backdrop')) {
    modalEl.classList.add('modal-window--hidden');
    addTransition();
  }
}

function OnCloseModalEsc(e) {
  if (e.code === 'Escape') {
    modalEl.classList.add('modal-window--hidden');
    window.removeEventListener('keydown', OnCloseModalEsc);
    addTransition();
  }
}

function getScrollBarWidth() {
  const item = document.createElement('div');
  item.style.position = 'absolute';
  item.style.top = '-9999px';
  item.style.width = '50px';
  item.style.height = '50px';
  item.style.overflow = 'scroll';
  item.style.visibility = 'hidden';

  document.body.appendChild(item);

  const scrollBarWidth = item.offsetWidth - item.clientWidth;

  document.body.removeChild(item);

  return scrollBarWidth;
}

function showScroll(e) {
  console.log(e.propertyName);
  if (e.propertyName === 'transform') {
    document.body.style.overflow = 'visible';
    document.body.style.paddingRight = '';

    modalEl.removeEventListener('transitionend', showScroll);
  }
}

function addTransition() {
  modalEl.addEventListener('transitionend', showScroll);
}
