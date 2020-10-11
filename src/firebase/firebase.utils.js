import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtOYm8TJspM7xjRpvtJwkbjcWP6BDTE2k",
  authDomain: "lupas-de-sol.firebaseapp.com",
  databaseURL: "https://lupas-de-sol.firebaseio.com",
  projectId: "lupas-de-sol",
  storageBucket: "lupas-de-sol.appspot.com",
  messagingSenderId: "107615088533",
  appId: "1:107615088533:web:39a869de37655e7b2bd09c",
};

export const createUserProfileDocument = async (userAuth, additialData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if (!snapShop.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additialData,
      });
    } catch (error) {
      console.log("Error creating User", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
