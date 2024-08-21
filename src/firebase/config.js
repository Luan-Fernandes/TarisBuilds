import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqkA0qwCfq4TfGrbKd4aXAsDtkw8qSyVc",
  authDomain: "miniblog-e2aa1.firebaseapp.com",
  projectId: "miniblog-e2aa1",
  storageBucket: "miniblog-e2aa1.appspot.com",
  messagingSenderId: "1035685988358",
  appId: "1:1035685988358:web:b44f0f699d44bbc54e1b87"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };