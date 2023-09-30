  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js"
    import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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
  const auth = getAuth()
  const analytics = getAnalytics(app);

  var email = document.getElementById('email')
var password = document.getElementById('password')

window.login = function(e) {
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(userCredential) {
        // User is successfully signed in.
        var user = userCredential.user;
        console.log(user.uid);
        alert("Login Successfull!");
        window.location.href = '/html files/homePage.html';
    })
    .catch(function(error) {
        // Handle errors here
        console.error(error);
        alert("Login error: Invalid Login Credentials");
    });
    console.log(obj);
}