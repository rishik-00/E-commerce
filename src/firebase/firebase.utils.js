import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyCuIKjOHznIw1gz40R9t0X7u7oogF_3fhY",
    authDomain: "e-com-db-e5d18.firebaseapp.com",
    projectId: "e-com-db-e5d18",
    storageBucket: "e-com-db-e5d18.appspot.com",
    messagingSenderId: "184117220895",
    appId: "1:184117220895:web:24d12fc70682db0ffb272a",
    measurementId: "G-ZW92TPDNB2"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error) {
        console.log('error createing user', error.message);
      }
     }
     return userRef;
     console.log(snapShot);
  }

  firebase.initializeApp(config); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

