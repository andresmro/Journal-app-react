// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5jyHkQP1Ol_nyJ4TtomTe2TPD0y4Sbn0",
  authDomain: "react-cursos-b0c64.firebaseapp.com",
  projectId: "react-cursos-b0c64",
  storageBucket: "react-cursos-b0c64.appspot.com",
  messagingSenderId: "553237570116",
  appId: "1:553237570116:web:8e5fc379a15c12a2f51211"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);
 export const FirebaseAuth = getAuth( FirebaseApp );
 export const FirebaseDB = getFirestore( FirebaseApp );
