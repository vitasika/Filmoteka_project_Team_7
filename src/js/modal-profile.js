const refs = {
    openModalBtn: document.querySelector('[modal-profile-open]'),
    closeModalBtn: document.querySelector('[modal-profile-close]'),
    modal: document.querySelector('[modal-profile-data]'),
    registerClose: document.querySelector('[modal-profile-register]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.registerClose.addEventListener('click', toggleModal);

  function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('profile-hidden');
  }
