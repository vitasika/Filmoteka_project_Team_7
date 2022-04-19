const refs = {
  bodyEl: document.querySelector('body'),
  headerContainerRef: document.querySelector('.header-container'),
  headerMyLibraryRef: document.querySelector('#header-myLibrary'),
  headerHomeRef: document.querySelector('#header-home'),
  headerRef: document.querySelector('.header'),
  searchFormRef: document.querySelector('#search-form'),
  teamLink: document.querySelector('a[data-action="open-modal"]'),
  teamModalEl: document.querySelector('[data-modal-backdrop]'),
  closeBtn: document.querySelector('.cross'),
  headerLogoRef: document.querySelector('.header-logo'),

  openModalBtn: document.querySelector('[modal-profile-open]'),
  closeModalBtn: document.querySelector('[modal-profile-close]'),
  modalProfile: document.querySelector('[modal-profile-data]'),
  registerClose: document.querySelector('[modal-profile-register]'),
  closeUserBtn: document.querySelector('[modal-user-close]'),
  profileCross: document.querySelector('.modal-profile-cross'),
  profileContainer: document.querySelector('#modal-profile__id'),

  openModalBtnReg: document.querySelector('[modal-registration-open]'),
  closeModalBtnReg: document.querySelector('[modal-registration-close]'),
  modalReg: document.querySelector('[modal-registration-data]'),
  registrationForm: document.querySelector('#registration-form'),
  registrationContainer: document.querySelector('#modal-registration__id'),

  modalEl: document.querySelector('[data-modal]'),
  buttonClose: document.querySelector('.modal__close-button'),
  cardList: document.querySelector('.card-set'),
  btn: document.querySelector('#toTop'),
  authForm: document.querySelector('.modal-profile__form'),
  authFormBnt: document.querySelector('#signIn'),
  authGoogleBtn: document.querySelector('#googleAuth'),
  authFacebookBtn: document.querySelector('#facebookAuth'),
  regForm: document.querySelector('#registration-form'),
  regFormBnt: document.querySelector('#signUp'),
  authDetails: document.querySelector('#profile'),
  authModal: document.querySelector('.modal-profile__container'),
  userModal: document.querySelector('.modal-user__container'),
  userModalName: document.querySelector('.modal-user__name'),
  userModalMail: document.querySelector('.modal-user__email'),
  signOutBnt: document.querySelector('#signOut'),
  inputEl: document.querySelector('.search-form__input'),
  modalMovieCard: document.querySelector('div[data-act="create"]'),
  paginationConteiner: document.querySelector('.pagination-container'),
};

export { refs };


 