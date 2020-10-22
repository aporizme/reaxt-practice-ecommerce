import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0chxNCA__z6BI6h5kF90GqDJjQye7TLQ",
  authDomain: "e-commerce-react-practice.firebaseapp.com",
  databaseURL: "https://e-commerce-react-practice.firebaseio.com",
  projectId: "e-commerce-react-practice",
  storageBucket: "e-commerce-react-practice.appspot.com",
  messagingSenderId: "870292126560",
  appId: "1:870292126560:web:c77c5f6dc90fa5635a7c05",
  measurementId: "G-JWVFY4TM7Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
