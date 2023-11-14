import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

    
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsijXmH3ziN9SYOjbzMsdCsiYA5rHWEXg",
  authDomain: "login-signup-auth-for-heckthon.firebaseapp.com",
  projectId: "login-signup-auth-for-heckthon",
  storageBucket: "login-signup-auth-for-heckthon.appspot.com",
  messagingSenderId: "894038748863",
  appId: "1:894038748863:web:58a08a49c0fba9860c600a",
  measurementId: "G-LPGRL9FYJC"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      window.location = "index.html"
      // ...
    }
  });
  









let btn = document.querySelector("#logout_btn")
btn.addEventListener('click',()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('logout successfully');
        window.location = "index.html"
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
      
})