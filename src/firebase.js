import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7GRZHeP8yBUK-kZsXA6ViroMjQZOVxFQ",
  authDomain: "mahakumbh-endless-runner-2024.firebaseapp.com",
  projectId: "mahakumbh-endless-runner-2024",
  storageBucket: "mahakumbh-endless-runner-2024.firebasestorage.app",
  messagingSenderId: "786224550632",
  appId: "1:786224550632:web:b00aaa6b7297cfde7e2f5d"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
