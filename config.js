import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDWDOZDiQGIA1QWmvU_a6IEr2IqweynM3o",
  authDomain: "booksanta-2f43f.firebaseapp.com",
  projectId: "booksanta-2f43f",
  storageBucket: "booksanta-2f43f.appspot.com",
  messagingSenderId: "784661332576",
  appId: "1:784661332576:web:320a47652d3b83765b7905"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
