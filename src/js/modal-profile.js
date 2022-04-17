const refs = {
  openModalBtn: document.querySelector('[modal-profile-open]'),
  closeModalBtn: document.querySelector('[modal-profile-close]'),
  modal: document.querySelector('[modal-profile-data]'),
  registerClose: document.querySelector('[modal-profile-register]'),
  closeUserBtn: document.querySelector('[modal-user-close]'),
  profileCross: document.querySelector('.modal-profile-cross'),
  profileContainer: document.querySelector('.modal-profile__container'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.registerClose.addEventListener('click', toggleModal);
refs.closeUserBtn.addEventListener('click', toggleModal);
refs.profileCross.addEventListener('mouseenter', toggleMerylin);
refs.profileCross.addEventListener('mouseleave', toggleMerylin);

function toggleModal(e) {
  e.preventDefault();
 
  refs.modal.classList.toggle('profile-hidden');
  
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