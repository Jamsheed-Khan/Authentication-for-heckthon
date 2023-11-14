



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

    
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

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

//signin with Email and password......................


let loginbtn = document.querySelector('#login_btn')


loginbtn.addEventListener('click', () => {
   
    let lemail = document.querySelector('#lemail')
      let lpassword = document.querySelector('#lpass')


      
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'welcome.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});








var allUsers = []
var users = localStorage.getItem('Users')
if(users !== null){
    allUsers = JSON.parse(users)
}




loginbtn.addEventListener('click',()=>{
    var email = document.getElementById('lemail').value
    var passward = document.getElementById('lpass').value
    var filterUsers = allUsers.filter(function(data){
        return data.email === email && data.passward === passward
    })
    if(filterUsers.length){
        Swal.fire(
            'Login successfully!',
            'You clicked the button!',
            'success'
          )  
        
    
    }
    else{
        Swal.fire({
            title: 'Oops..,Please signup first',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
})



let passicon = document.querySelector('#passicon')
passicon.addEventListener('click',()=>{
    let lpass = document.querySelector('#lpass')
    if(lpass.type === 'password'){
        lpass.type = 'text'
    }
    else{
        lpass.type = 'password'
    }
})

















