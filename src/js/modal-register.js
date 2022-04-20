import { createUser } from './firebase/firebaseAuth';
import { refs } from './refs/refs';
import Notiflix from 'notiflix';

let userData = {
  firstname: '',
  email: '',
  pwd: '',
  confirmpwd: '',
};

const notiflixOptions = {
    timeout: 6000,
    clickToClose: true,
    fontSize: '20px',
    width: '700px',
    position: 'center-top',
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

  if(validation()){
  createUser();
  e.target.reset();
  resetUserData();
  refs.modalReg.classList.toggle('profile-hidden');
  }
}

function resetUserData() {
  userData.firstname = '';
  userData.email = '';
  userData.pwd = '';
  userData.confirmpwd = '';
}

function validation() {
  let nameRegEx = /^[a-zA-Z\ ]+$/;
  let emailRegEx = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
  let pwdRegEx = /^[a-zA-Z0-9]{6,10}$/;

  if (
    userData.firstname === '' ||
    userData.email === '' ||
    userData.pwd === '' ||
    userData.confirmpwd === ''
  ) {
    Notiflix.Notify.failure('There are empty fileds. Please, fill in all the fields.',notiflixOptions);
    return false;
  }

  if (userData.pwd !== userData.confirmpwd) {
    Notiflix.Notify.failure('Passwords do not match. Please, enter correct confirmation password.',notiflixOptions);
    return false;
  }

  if (!nameRegEx.test(userData.firstname)) {
    Notiflix.Notify.failure("The name should contain only Latin alphabets",notiflixOptions);
    return false;
  }

  if (!emailRegEx.test(userData.email)) {
    Notiflix.Notify.failure("Enter a valid email",notiflixOptions);
    return false;
  }

  if (!pwdRegEx.test(userData.pwd)) {
    Notiflix.Notify.failure("The password should contain at least 6 alphabets and/or numbers",notiflixOptions);
    return false;
  }

  return true;
}