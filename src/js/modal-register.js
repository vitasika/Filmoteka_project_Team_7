import { createUser } from './firebase/firebaseAuth';

const refsReg = {
  openModalBtnReg: document.querySelector('[modal-registration-open]'),
  closeModalBtnReg: document.querySelector('[modal-registration-close]'),
  modalReg: document.querySelector('[modal-registration-data]'),
  registrationForm: document.querySelector('#registration-form'),
};

let userData = {
  firstname: '',
  email: '',
  pwd: '',
  confirmpwd: '',
};

refsReg.openModalBtnReg.addEventListener('click', toggleModal);
refsReg.closeModalBtnReg.addEventListener('click', toggleModal);
refsReg.registrationForm.addEventListener('input', onFormInput);
refsReg.registrationForm.addEventListener('submit', onFormSubmit);

function toggleModal(e) {
  e.preventDefault();
  refsReg.modalReg.classList.toggle('profile-hidden');

   if (document.body.classList.contains('modal-profile__disabled-scroll')) {
    document.body.classList.remove('modal-profile__disabled-scroll');
    return;
  }

  if (!document.body.classList.contains('modal-profile__disabled-scroll')) {
    document.body.classList.add('modal-profile__disabled-scroll');
    return;
  }
}

function onFormInput(e) {
  userData[e.target.name] = e.target.value;
}

function onFormSubmit(e) {
  e.preventDefault();

  if (
    userData.firstname === '' ||
    userData.email === '' ||
    userData.pwd === '' ||
    userData.confirmpwd === ''
  ) {
    alert('There are empty fileds. Please, fill in all the fields.');
    return;
  }

  if (userData.pwd.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  if (userData.pwd !== userData.confirmpwd) {
    alert('Passwords do not match. Please, enter correct confirmation password.');
    return;
  }
  createUser();
  e.target.reset();
  resetUserData();
  refsReg.modalReg.classList.toggle('profile-hidden');
}

function resetUserData() {
  userData.firstname = '';
  userData.email = '';
  userData.pwd = '';
  userData.confirmpwd = '';
}
