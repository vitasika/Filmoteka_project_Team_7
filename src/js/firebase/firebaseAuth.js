import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, child, get, onValue } from 'firebase/database';
import { refs } from '../refs/refs';
const firebaseConfig = {
  apiKey: 'AIzaSyBgFVW820S_orUiL-KRqyb88sulmcWmLHE',
  authDomain: 'fir-962a4.firebaseapp.com',
  databaseURL: 'https://fir-962a4-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'fir-962a4',
  storageBucket: 'fir-962a4.appspot.com',
  messagingSenderId: '482333126963',
  appId: '1:482333126963:web:cb3e5e22413fc279c48e46',
  measurementId: 'G-V4MD76QV4Y',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const database = getDatabase();
function createUser(e) {
  const email = refs.regForm.email.value;
  const password = refs.regForm.pwd.value;
  const displayName = refs.regForm.firstname.value;

  createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
    // Signed in
    const user = userCredential.user;
    user.displayName = displayName;
    writeUserData(user);
  });
}

function writeUserData(user) {
  set(ref(database, 'users/' + user.uid), {
    username: user.displayName,
    email: user.email,
    last_login: Date.now(),
  })
    .then(() => {})
    .catch(error => {
      alert('Sorry smth happened' + error);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function login() {
  const email = refs.authForm.email.value;
  const password = refs.authForm.password.value;
  signInWithEmailAndPassword(auth, email, password).then(userCredential => {
    // Signed in
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      last_login: Date.now(),
    });
  });
}

onAuthStateChanged(auth, user => {
  if (user) {
    const currentUser = ref(database, 'users/' + user.uid + '/username');
    onValue(currentUser, snapshot => {
      const data = snapshot.val();
      alert(`${data} welcome to filmoteka`);
    });
  } else {
    alert('oops something went wrong');
  }
});

refs.authGoogleBtn.addEventListener('click', e => {
  e.preventDefault();
  signInWithPopup(auth, googleProvider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      writeUserData(user);
      e.currentTarget.reset();
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
refs.authFacebookBtn.addEventListener('click', e => {
  e.preventDefault();
  signInWithPopup(auth, facebookProvider)
    .then(result => {
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      writeUserData(user);

      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
});

refs.authForm.addEventListener('submit', e => {
  e.preventDefault();
  login();
  e.currentTarget.reset();
});

export { createUser };
