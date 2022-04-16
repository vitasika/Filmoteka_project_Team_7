import { refs } from './refs/refs';

refs.buttonClose.addEventListener('click', onClickCloseButton);

refs.cardList.addEventListener('click', onClickCard);

function onClickCard(e) {
  if (!e.target.classList.contains('description_films')) {
    return;
  }
  document.body.style.paddingRight = `${getScrollBarWidth()}px`;
  document.body.style.overflow = 'hidden';
  refs.modalEl.classList.remove('modal-window--hidden');
  window.addEventListener('keydown', OnCloseModalEsc);
  refs.modalEl.addEventListener('click', onClickBackdrop);
}

function onClickCloseButton() {
  refs.modalEl.classList.add('modal-window--hidden');
  addTransition();
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('backdrop')) {
    refs.modalEl.classList.add('modal-window--hidden');
    addTransition();
  }
}

function OnCloseModalEsc(e) {
  if (e.code === 'Escape') {
    refs.modalEl.classList.add('modal-window--hidden');
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
  if (e.propertyName == 'transform') {
    document.body.style.overflow = 'visible';
    document.body.style.paddingRight = ' ';

    refs.modalEl.removeEventListener('transitionend', showScroll);
  }
}

function addTransition() {
  refs.modalEl.addEventListener('transitionend', showScroll);
}
