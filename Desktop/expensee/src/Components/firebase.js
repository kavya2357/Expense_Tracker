// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDzRKW-OjxbRspTUGBbSepWg63m3oE2EI",
  authDomain: "expensetracker-eb732.firebaseapp.com",
  projectId: "expensetracker-eb732",
  storageBucket: "expensetracker-eb732.appspot.com",
  messagingSenderId: "641697384043",
  appId: "1:641697384043:web:8c506900a4c23ac72ed32e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app