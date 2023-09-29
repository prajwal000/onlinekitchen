import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJAPgHY7XrapDq7sLcG7D_wLy2sO3GY-U",
  authDomain: "onlinekitchen-ea01d.firebaseapp.com",
  projectId: "onlinekitchen-ea01d",
  storageBucket: "onlinekitchen-ea01d.appspot.com",
  messagingSenderId: "50625180504",
  appId: "1:50625180504:web:a417509fe81324e8656b2d",
  measurementId: "G-ZQRQJ84HVP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { firebaseApp, auth, provider, storage };
export default db;
