import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';
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

function setOnDatabase(data) {
  onAuthStateChanged(auth, user => {
    if (user) {
      const library = ref(database, 'users/' + user.uid + '/library' + '/watchedFilm');
      push(ref(database, 'users/' + user.uid + '/library' + '/watchedFilm'), {
        watchedFilm: data,
      });
      console.log("set -",library);
    } else {
      alert('SET: Enter on your account');
    }
  });
}

function getOnDatabase() {
  onAuthStateChanged(auth, user => {
    if (user) {
      const library = ref(database, 'users/' + user.uid + '/library' + '/watchedFilm');
      
      onValue(library, snapshot => {
        
        snapshot.forEach(childSnapshot => {
          const childData = childSnapshot.child('/watchedFilm').val();
          // console.log("get -",childData);
          return childData;
        });
      });
      // console.log(data[0]);
      // return data[0];
    } else {
      alert('GET: Enter on your account');
    }
  });
}

// function getOnDatabase() {
//   const user = auth.currentUser;
//   if (user) {
//     const library = ref(database, 'users/' + user.uid + '/library' + '/watchedFilm');
//     const data = [];
//     onValue(library, snapshot => {
//       snapshot.forEach(childSnapshot => {
//         const childData = childSnapshot.child('/watchedFilm').val();
//         // console.log("get -",childData);
//         data.push(childData);
//         return data;
//       });
//     });
//     console.log('get -', Object.keys(data));
//     return Object.values(data);
//   } else {
//     alert('GET: Enter on your account');
//   }
// }


onAuthStateChanged(auth, user => {
  if (user) {
    const currentUser = ref(database, 'users/' + user.uid);
    onValue(currentUser, snapshot => {
      const username = snapshot.val().username;
      const email = snapshot.val().email;
      refs.userModalName.innerHTML = `${username}`;
      refs.userModalMail.innerHTML = `${email}`;
      refs.authModal.classList.add('modal-profile__hidden');
      refs.userModal.classList.remove('modal-user__hidden');
    });
  } else {
    refs.userModalName.innerHTML = ``;
    refs.userModalMail.innerHTML = ``;
    refs.userModal.classList.add('modal-user__hidden');
    refs.authModal.classList.remove('modal-profile__hidden');
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

refs.authForm.addEventListener('submit', e => {
  e.preventDefault();
  login();
  e.currentTarget.reset();
});

refs.signOutBnt.addEventListener('click', e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
});

export { createUser };
export { setOnDatabase };
export { getOnDatabase };
