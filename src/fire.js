import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBbU7FdVZGszzgOP9ZAeOenJ7Q6BWpiUes",
    authDomain: "barter-4dbc9.firebaseapp.com",
    projectId: "barter-4dbc9",
    storageBucket: "barter-4dbc9.appspot.com",
    messagingSenderId: "62143500675",
    appId: "1:62143500675:web:ea09292bab758478c126b6"
  };
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;