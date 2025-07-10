// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY5PVpLzAEgiXu1LZyxZt-liJ3JMjYC08",
  authDomain: "hr-pulse-b9fea.firebaseapp.com",
  projectId: "hr-pulse-b9fea",
  storageBucket: "hr-pulse-b9fea.firebasestorage.app",
  messagingSenderId: "955844961304",
  appId: "1:955844961304:web:6a24e7ae93b31afa644f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);