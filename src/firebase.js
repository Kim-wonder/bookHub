// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp2R6iMVgvxsYDtG0sV9bTrnYm9cwHrDA",
  authDomain: "bookhub-c6845.firebaseapp.com",
  projectId: "bookhub-c6845",
  storageBucket: "bookhub-c6845.appspot.com",
  messagingSenderId: "851486448762",
  appId: "1:851486448762:web:8ef5a4f80487c80655efc3",
  measurementId: "G-1J5S5ZQYHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
