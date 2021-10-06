// libraries
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAe8UiAfKMIf_2Y6YwOJ_6qK3JSWLkIfl4",
    authDomain: "whatsapp-clone-837b0.firebaseapp.com",
    projectId: "whatsapp-clone-837b0",
    storageBucket: "whatsapp-clone-837b0.appspot.com",
    messagingSenderId: "565509027465",
    appId: "1:565509027465:web:6a3307ead2ffadfd3eb858",
    measurementId: "G-0V8KNJ4CVF",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
