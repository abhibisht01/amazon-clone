// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGdZU2rSSoCWugptBT4k70_pJDh__62Oc",
    authDomain: "clone-9ed63.firebaseapp.com",
    projectId: "clone-9ed63",
    storageBucket: "clone-9ed63.appspot.com",
    messagingSenderId: "819371082719",
    appId: "1:819371082719:web:59932310d3d156d381ba6a",
    measurementId: "G-N759DG2L70"
};

// Some to do Same Steps Everytime
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // for the databse
const auth = firebase.auth(); // for authenticaion

export { db, auth }; // so that we can use these in the app.