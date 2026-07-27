import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW3PoZpI7CfX9mrdeIxPTyla0sAqm5WGQ",
  authDomain: "aidlink-2-7cf4d.firebaseapp.com",
  projectId: "aidlink-2-7cf4d",
  storageBucket: "aidlink-2-7cf4d.firebasestorage.app",
  messagingSenderId: "422346920818",
  appId: "1:422346920818:web:6a40f0a14f88543fec43eb",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;