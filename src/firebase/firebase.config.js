// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVmU9PCQcelCC6sPkgNTKOxJnCRdlXlHs",
  authDomain: "gym-auth-843e3.firebaseapp.com",
  projectId: "gym-auth-843e3",
  storageBucket: "gym-auth-843e3.appspot.com",
  messagingSenderId: "75305956225",
  appId: "1:75305956225:web:4a2ded697a5cfb80626e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;