  const refs = {
    openModalBtn: document.querySelector('[modal-profile-open]'),
    closeModalBtn: document.querySelector('[modal-profile-close]'),
    modal: document.querySelector('[modal-profile-data]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('profile-hidden');
  }
