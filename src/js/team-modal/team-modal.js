import { refs } from '../refs/refs';
import { getScrollBarWidth } from '../modal';

refs.teamLink.addEventListener("click", modalTeamOpen);
refs.closeBtn.addEventListener("click", modalTeamClose);
refs.teamModalEl.addEventListener("click", onClickTeamBackdrop);

function modalTeamOpen(e){
    e.preventDefault();
    refs.teamModalEl.classList.remove('is-hidden');
    document.body.style.paddingRight = `${getScrollBarWidth()}px`;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', OnCloseTeamModalEsc);
}

function modalTeamClose(e){
    refs.teamModalEl.classList.add('is-hidden');
    addTransitionTeam();
}

function onClickTeamBackdrop(e){
    if (e.target.classList.contains('backdrop--team')) {
        refs.teamModalEl.classList.add('is-hidden');
      }
      addTransitionTeam();
}

function showScrollTeam(e) {
    console.log(e.propertyName);
    if (e.propertyName == 'opacity') {
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = ' ';
      refs.teamModalEl.removeEventListener('transitionend', showScrollTeam);
    }
  }
  
  function addTransitionTeam() {
    refs.teamModalEl.addEventListener('transitionend', showScrollTeam);
  }

 function OnCloseTeamModalEsc(e){
    if (e.code === 'Escape') {
        refs.teamModalEl.classList.add('is-hidden');
        window.removeEventListener('keydown', OnCloseTeamModalEsc);
        addTransitionTeam();
      }
 }