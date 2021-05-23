import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDGQXdMV6xvehMt7QwiOM5lxZOYAax9fh0",
    authDomain: "ecommerce-16145-37d66.firebaseapp.com",
    projectId: "ecommerce-16145-37d66",
    storageBucket: "ecommerce-16145-37d66.appspot.com",
    messagingSenderId: "476372913404",
    appId: "1:476372913404:web:f3c704867efd9bbbf45b79"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);