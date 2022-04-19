import { createUser } from './firebase/firebaseAuth';
import { refs } from './refs/refs';

let userData = {
  firstname: '',
  email: '',
  pwd: '',
  confirmpwd: '',
};

refs.openModalBtnReg.addEventListener('click', toggleModal);
refs.closeModalBtnReg.addEventListener('click', toggleModal);
refs.registrationForm.addEventListener('input', onFormInput);
refs.registrationForm.addEventListener('submit', onFormSubmit);

function toggleModal(e) {
  e.preventDefault();
  refs.modalReg.classList.toggle('profile-hidden');

  let mpodalProfileH = document.getElementById('modal-registration__id').scrollHeight;
  let vpHeight = document.body.clientHeight;

  if (vpHeight < mpodalProfileH) {
    refs.registrationContainer.style.height = `${vpHeight}px`;
  }
  if (vpHeight >= mpodalProfileH) {
    refs.registrationContainer.style.height = 'auto';
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
  refs.modalReg.classList.toggle('profile-hidden');
}

function resetUserData() {
  userData.firstname = '';
  userData.email = '';
  userData.pwd = '';
  userData.confirmpwd = '';
}
