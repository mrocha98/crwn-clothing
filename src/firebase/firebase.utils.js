import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcZ0Sp8GKLx2Y7zYL1-zlfAP8nTLwrtQA",
    authDomain: "crwn-clothing-648d9.firebaseapp.com",
    databaseURL: "https://crwn-clothing-648d9.firebaseio.com",
    projectId: "crwn-clothing-648d9",
    storageBucket: "crwn-clothing-648d9.appspot.com",
    messagingSenderId: "747793406581",
    appId: "1:747793406581:web:0cc9416032ff6a2d9fb63c",
    measurementId: "G-5PT527KB2X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
