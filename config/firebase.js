import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore" 


const firebaseConfig = {
  apiKey: "AIzaSyDP8rwEaMKzLtRaoJgaRtI6T1bIs2DT2QA",
  authDomain: "foco-project.firebaseapp.com",
  projectId: "foco-project",
  storageBucket: "foco-project.appspot.com",
  messagingSenderId: "187241132786",
  appId: "1:187241132786:web:f862c8ebb69af66c00d66b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const auth = getAuth(app);