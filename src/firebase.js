import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_sLyHIwLDh2YOEbBdCjdxNTO_VhyMS88",
  authDomain: "challenge-51736.firebaseapp.com",
  projectId: "challenge-51736",
  storageBucket: "challenge-51736.appspot.com",
  messagingSenderId: "24536927903",
  appId: "1:24536927903:web:43c44e1b39613aedf7dcaa",
  measurementId: "G-EZL4RDHKYZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };