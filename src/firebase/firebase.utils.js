import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAENNb5AM39eDnbq_REntt6VTexZ2Ummus",
  authDomain: "crwn-db-5b4f4.firebaseapp.com",
  projectId: "crwn-db-5b4f4",
  storageBucket: "crwn-db-5b4f4.appspot.com",
  messagingSenderId: "778032525364",
  appId: "1:778032525364:web:ce8a81b045237152485a61",
  measurementId: "G-JLY56EDK1R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth and provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
