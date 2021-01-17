import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBElIstatzdZBQuCOxXquw6Y3byh8igA_s",
  authDomain: "market-6b2ff.firebaseapp.com",
  projectId: "market-6b2ff",
  storageBucket: "market-6b2ff.appspot.com",
  messagingSenderId: "92061082876",
  appId: "1:92061082876:web:084bd52f05b9e99f112379",
  measurementId: "G-FR1Y1CHLGX"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;