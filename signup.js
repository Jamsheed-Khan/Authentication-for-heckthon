import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

    
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

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

 //create user with email and password


 let registerbtn = document.querySelector("#Register_btn")
 registerbtn.addEventListener('click',function () {
   let semail = document.getElementById("semail")
   let spass = document.getElementById("spass")

   createUserWithEmailAndPassword(auth, semail.value, spass.value)
 .then((userCredential) => {
    
   const user = userCredential.user;
   console.log('user==>',user);
   window.location = "index.html"
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log("error==>",errorMessage);
 });
 });










var allUsers = []
var users = localStorage.getItem('Users')
if(users !== null){
    allUsers = JSON.parse(users)
}

registerbtn.addEventListener('click',()=>{

    var usr = document.getElementById('usr')
    var email = document.getElementById('semail')
    var passward = document.getElementById('spass')
    var obj = {
        usr :usr.value,
        email :email.value,
        passward : passward.value
    }
    allUsers.push(obj)
    localStorage.setItem('Users',JSON.stringify(allUsers))
    
    
    Swal.fire(
    'Acount create successfully!',
    'You clicked the button!',
    'success'
    )
})


