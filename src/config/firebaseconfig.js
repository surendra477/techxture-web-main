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


// const firebaseConfig = {
//   apiKey: "AIzaSyAtGWHH-hU6vzTCcaJ6SLG8f5IEvJXR1Qs",
//   authDomain: "techxture-bdcc1.firebaseapp.com",
//   projectId: "techxture-bdcc1",
//   storageBucket: "techxture-bdcc1.appspot.com",
//   messagingSenderId: "403167294720",
//   appId: "1:403167294720:web:fdfc32635c6c0289956fe5",
//   measurementId: "G-NP4Z5BWD02",
// };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// let akas = "a k a s h";
// let akash = akas.split(" ");

// db.collection("data").add({
//   title: "note.title",
//   members: akash,
// });

// Real Time Database
// firebase.database().ref("user").push({
//   title: "note.title",
//   content: "note.content",
// });

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db,auth, provider };
// export default db;
