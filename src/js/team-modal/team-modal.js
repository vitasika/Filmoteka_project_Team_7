// const teamLink = document.querySelector('a[data-action="open-modal"]');
// const teamModalEl = document.querySelector('[data-modal-backdrop]');
// const closeBtn = document.querySelector('.cross');

import { refs } from '../refs/refs';

refs.teamLink.addEventListener("click", onLinkClick);
refs.closeBtn.addEventListener("click", onLinkClick);

function onLinkClick(e){
    e.preventDefault();
    refs.teamModalEl.classList.toggle('is-hidden');
}
