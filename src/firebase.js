// import firebase from 'firebase';
// import firebase from "firebase/compat/app";
 import { initializeApp } from 'firebase/app';
 import { getFirestore } from 'firebase/firestore/lite';
 import { getAuth } from "firebase/auth";
 import { getAnalytics } from "firebase/analytics";
 import { getStorage } from "firebase/storage";
 import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXET5SXI9TYJrWGm-MfYzeG2AVvpGY3dA",
    authDomain: "disneyplushotstarclone-4f8b4.firebaseapp.com",
    projectId: "disneyplushotstarclone-4f8b4",
    storageBucket: "disneyplushotstarclone-4f8b4.appspot.com",
    messagingSenderId: "580471611032",
    appId: "1:580471611032:web:89a239fe593dce57aefaed",
    measurementId: "G-Q7K07WKYC9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);

  export { auth, provider, storage, analytics, signInWithPopup};
  export default db;
  
