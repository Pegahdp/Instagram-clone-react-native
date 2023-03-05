import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAfzLie0JwaI1fQdPxHUhJ6wYj3_e5J738",
  authDomain: "rn-instagram-clone-a3e96.firebaseapp.com",
  projectId: "rn-instagram-clone-a3e96",
  storageBucket: "rn-instagram-clone-a3e96.appspot.com",
  messagingSenderId: "193233092497",
  appId: "1:193233092497:web:992e5b710d772b28e3e430"
};


! firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.app()
const db = firebase.firestore()
export  {firebase, db}