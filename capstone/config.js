import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
   apiKey: "AIzaSyC1B2ez76KiqKo8YazNchqXkipKRHYS4o0",
    authDomain: "simplelogin-f3b40.firebaseapp.com",
    projectId: "simplelogin-f3b40",
    storageBucket: "simplelogin-f3b40.appspot.com",
    messagingSenderId: "7979735524",
    appId: "1:7979735524:web:4747f5c924ed50acf4cff1"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
  }
  

export default firebase.firestore()