// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-eiqlyoiNUHJ9L5j8itbmSLefWyIR3WQ",
  authDomain: "movies-de74d.firebaseapp.com",
  projectId: "movies-de74d",
  storageBucket: "movies-de74d.appspot.com",
  messagingSenderId: "662574082863",
  appId: "1:662574082863:web:da92ebb25ff99ac8018fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const userDetails = document.getElementById('userDetails');
const loginOrSignup = document.getElementById('loginOrSignup');
const logoutbtn = document.getElementById('logoutbtn');
const userName = document.getElementById('userName');

onAuthStateChanged(auth, (user) => {
    if(user) {
        if(user.displayName.length > 6) {
            userName.innerHTML = user.displayName.substring(0,5) + '..';
        }
        else {
            userName.innerHTML = user.displayName;
        }
        userDetails.style.display = "block";
        loginOrSignup.style.display = "none";
    }
    else {
        element.innerHTML = "Sign In";
        element.addEventListener("click",() => {
            window.location.href = '/html files/signin.html'
        })
        console.log("User not Signed In");
        userDetails.style.display = "none";
        loginOrSignup.style.display = "block";
    }
})

logoutbtn.addEventListener('click', () => {
    signOut(auth)
    .then(() => {
        console.log("Logout Successfull");
        userDetails.style.display = "none";
        loginOrSignup.style.display = "block";
    })
    .catch((error) => {
        console.log(error);
    })
})