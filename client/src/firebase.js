// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "agile-project-e0c66.firebaseapp.com",
  projectId: "agile-project-e0c66",
  storageBucket: "agile-project-e0c66.appspot.com",
  messagingSenderId: "266641628270",
  appId: "1:266641628270:web:cf681cbea8a7a2239cda7f",
  measurementId: "G-VB92D6G723"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);