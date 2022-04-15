import { refs } from '../refs/refs';

refs.teamLink.addEventListener("click", onLinkClick);
refs.closeBtn.addEventListener("click", onLinkClick);

function onLinkClick(e){
    e.preventDefault();
    refs.teamModalEl.classList.toggle('is-hidden');
}
