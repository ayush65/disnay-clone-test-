import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "kjrgkergvhe",
  authDomain: "dddddddddddddddcom",
  projectId: "dddddd-2024",
  storageBucket: "dddddddddddddddddddddge.app",
  messagingSenderId: "786rrgh224550632",
  appId: "1:78622455e45y5i8io9otrggg5h65j0632:web:b00aaa6b7297cfde7e2f5d"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
