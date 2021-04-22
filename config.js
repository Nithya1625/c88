import firebase from 'firebase'
require ('@firebase/firestore')


  // Your web app's Firebase co*nfiguration
  var firebaseConfig = {
    apiKey: "AIzaSyA8uQYklO5tDSiXd_E-PBpoarce2zWh9lA",
    authDomain: "booksanta-ed28e.firebaseapp.com",
    projectId: "booksanta-ed28e",
    storageBucket: "booksanta-ed28e.appspot.com",
    messagingSenderId: "582924705397",
    appId: "1:582924705397:web:9662c33456a36bf117e23c"
  };
  if(!firebase.apps.length)
  {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();
