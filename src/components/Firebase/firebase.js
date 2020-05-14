import app from 'firebase/app';
import 'firebase/auth';

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

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  createUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  sendPasswordResetEmail = email => this.auth.sendPasswordResetEmail(email);

  signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  updatePassword = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;