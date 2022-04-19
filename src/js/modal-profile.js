import { refs } from './refs/refs';

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.registerClose.addEventListener('click', toggleModal);
refs.closeUserBtn.addEventListener('click', toggleModal);
refs.profileCross.addEventListener('mouseenter', toggleMerylin);
refs.profileCross.addEventListener('mouseleave', toggleMerylin);

function toggleModal(e) {
  e.preventDefault();
 
  refs.modalProfile.classList.toggle('profile-hidden');

  let mpodalProfileH = document.getElementById('modal-profile__id').scrollHeight;
  let vpHeight = document.body.clientHeight;

  if (vpHeight < mpodalProfileH) {
    refs.profileContainer.style.height = `${vpHeight}px`;
  }
  if (vpHeight >= mpodalProfileH) {
    refs.profileContainer.style.height = 'auto';
  }
  
  if (document.body.classList.contains('modal-profile__disabled-scroll')) {
    document.body.classList.remove('modal-profile__disabled-scroll');
    return;
  }

  if (!document.body.classList.contains('modal-profile__disabled-scroll')) {
    document.body.classList.add('modal-profile__disabled-scroll');
    return;
  }
}

function toggleMerylin(e) {
  e.preventDefault();
  refs.profileContainer.classList.toggle('merylin');
}