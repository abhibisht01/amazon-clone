// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
   Add Yours
};

// Some to do Same Steps Everytime
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // for the databse
const auth = firebase.auth(); // for authenticaion

export { db, auth }; // so that we can use these in the app.
