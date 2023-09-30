
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
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
  const db = getFirestore();
  
  var fullname = document.getElementById('fullname')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  var cPassword = document.getElementById('cPassword')
  
  window.signup = function(e) {
    e.preventDefault();
    var obj = {
        fullname:fullname.value,
        email:email.value,
        password:password.value
    }
    
    if(cPassword.value === password.value) {
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(async function(userCredential) {
        await updateProfile(userCredential.user, {displayName: obj.fullname});
  
        const userDocRef = doc(db, "users", userCredential.user.uid);
        const userData = {
          displayName: obj.fullname,
          email: obj.email
        };
  
        await setDoc(userDocRef, userData);
  
        alert("Signup Successfull!")
        window.location.href = '/html files/signin.html'
      })
      .catch(function(err) {
        alert("error" + err)
      })
      console.log(obj)
    }
    else {
      alert('Password and Confirm Password must be same')
      return;
    }
  };