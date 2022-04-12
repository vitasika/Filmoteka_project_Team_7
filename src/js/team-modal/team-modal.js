const teamLink = document.querySelector('a[data-action="open-modal"]');
const teamModalEl = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('.cross');

const openModal = teamLink.addEventListener("click", onLinkClick);
const closeModal = closeBtn.addEventListener("click", onLinkClick);

function onLinkClick(e){
    e.preventDefault();
    teamModalEl.classList.toggle('is-hidden');
}

export { teamLink, teamModalEl, closeBtn, openModal, closeModal, onLinkClick };