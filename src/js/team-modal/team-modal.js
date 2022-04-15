const teamLink = document.querySelector('a[data-action="open-modal"]');
const teamModalEl = document.querySelector('[data-modal-backdrop]');
const closeBtn = document.querySelector('.cross');


teamLink.addEventListener("click", onLinkClick);
closeBtn.addEventListener("click", onLinkClick);

function onLinkClick(e){
    e.preventDefault();
    let btn = document.querySelector("#toTop");
    btn.classList.toggle('show');
    teamModalEl.classList.toggle('is-hidden');
}
