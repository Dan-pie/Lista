import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBlL1TWgKrAh-E35seIOrq-u7-g4p6HyL8",
    authDomain: "lista-de-nomes-aa08d.firebaseapp.com",
    projectId: "lista-de-nomes-aa08d",
    storageBucket: "lista-de-nomes-aa08d.firebasestorage.app",
    messagingSenderId: "497935564360",
    appId: "1:497935564360:web:f96bc69e34b75d1bff627d",
    measurementId: "G-RR1FG870CE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
