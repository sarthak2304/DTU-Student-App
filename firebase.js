import firebase from 'firebase'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQ8zSdOwO_NJCCzHl6tVP7Evo_UA_ZAxI",
  authDomain: "deltech-student-app.firebaseapp.com",
  projectId: "deltech-student-app",
  storageBucket: "deltech-student-app.appspot.com",
  messagingSenderId: "974939247732",
  appId: "1:974939247732:web:03780aaeefcce2ae6bed21",
  measurementId: "G-JYLCJK2TXN"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { firebase, db }