import firebase from "firebase"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA70HEyjl2v33lW6ovQtanqQul2LhuotSI",
  authDomain: "techxter-8edc7.firebaseapp.com",
  projectId: "techxter-8edc7",
  storageBucket: "techxter-8edc7.appspot.com",
  messagingSenderId: "875062991424",
  appId: "1:875062991424:web:d609b5dfb6a2c579de5da5",
  measurementId: "G-E82SR3S213",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
