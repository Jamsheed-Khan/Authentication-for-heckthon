import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

    
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

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


 let sent_email = document.querySelector("#sent_email")
let forgot_email = document.querySelector("#forgot_email")
sent_email.addEventListener('click',()=>{
    sendPasswordResetEmail(auth, forgot_email.value)
  .then(() => {
    forgot_email = ""
    console.log("congratulation reset confirmation email sent successfully")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

})