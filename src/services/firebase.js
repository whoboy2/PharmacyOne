import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB2xw571CTwA5Hwtc5sIeoudEe7ONP8i0w",
    authDomain: "pharmacyone-bbb38.firebaseapp.com",
    projectId: "pharmacyone-bbb38",
    storageBucket: "pharmacyone-bbb38.appspot.com",
    messagingSenderId: "711053217102",
    appId: "1:711053217102:web:128819b7739b23455ba21f"
  };

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.firestore();
