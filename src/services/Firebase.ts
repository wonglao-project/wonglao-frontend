// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
// import "dotenv/config"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.firebase_apiKey || "",
  authDomain: import.meta.env.firebase_authDomain || "",
  projectId: import.meta.env.firebase_projectId || "",
  storageBucket:
    import.meta.env.firebase_storageBucket || "wonglao-project.appspot.com",
  messagingSenderId: import.meta.env.firebase_messagingSenderId || "",
  appId: import.meta.env.firebase_appId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
