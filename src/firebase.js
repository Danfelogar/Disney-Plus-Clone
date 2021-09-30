import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBDE1-X0Ym7SEQoZ7BkElXhMb63YpkzOgw",
    authDomain: "disney-plus-clone-f64b5.firebaseapp.com",
    projectId: "disney-plus-clone-f64b5",
    storageBucket: "disney-plus-clone-f64b5.appspot.com",
    messagingSenderId: "727762324483",
    appId: "1:727762324483:web:67dd13ec1047ac9133d236",
    measurementId: "G-TBCSPT6ZTL"
};

  //Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;