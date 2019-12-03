import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQ3WGDUjYKBJUDAhAgTmAKNrjjSGtM3Js",
    authDomain: "crwn-db-4907a.firebaseapp.com",
    databaseURL: "https://crwn-db-4907a.firebaseio.com",
    projectId: "crwn-db-4907a",
    storageBucket: "crwn-db-4907a.appspot.com",
    messagingSenderId: "1067486790768",
    appId: "1:1067486790768:web:abefda067eee2599a620b5",
    measurementId: "G-PFF9M5F69R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
