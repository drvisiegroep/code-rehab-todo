// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Verschil tussen versie 8 en 9 firebase
// Verschil in regio
const firebaseConfig = {
  apiKey: "AIzaSyCk9Foa8o6zNUigAGEFZ4GszXKXo8jB9kM",
  authDomain: "cr---todo.firebaseapp.com",
  databaseURL: "https://cr---todo-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "cr---todo",
  storageBucket: "cr---todo.appspot.com",
  messagingSenderId: "738754082461",
  appId: "1:738754082461:web:b715a228c53ff406e70674"

};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)