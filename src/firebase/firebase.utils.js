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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists){
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.error('Error creating user', err.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;