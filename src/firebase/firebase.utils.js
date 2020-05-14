import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCGiCyskOVZIn0vqWIAukqR0R9bSpoVOKE",
  authDomain: "fir-playground-464df.firebaseapp.com",
  databaseURL: "https://fir-playground-464df.firebaseio.com",
  projectId: "fir-playground-464df",
  storageBucket: "fir-playground-464df.appspot.com",
  messagingSenderId: "372422978631",
  appId: "1:372422978631:web:7d47d4bc228f09a84cd562",
  measurementId: "G-H2PHYBC31G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${ userAuth.uid }`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        displayName,
        email,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}