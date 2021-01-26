import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQcx8SlSISfQanUQCTf3ZiN6RMpgn_JtI",
    authDomain: "linkedin-a1244.firebaseapp.com",
    projectId: "linkedin-a1244",
    storageBucket: "linkedin-a1244.appspot.com",
    messagingSenderId: "436837291792",
    appId: "1:436837291792:web:7cbfdedb668b4079493795",
    measurementId: "G-VE56R1GG62"
};

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

  