import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAHIRS3QA401CP8iAb7wiNwMkwG6KIDqfk",
  authDomain: "hupe-51640.firebaseapp.com",
  projectId: "hupe-51640",
  storageBucket: "hupe-51640.appspot.com",
  messagingSenderId: "840503457230",
  appId: "1:840503457230:web:a069f063d9cd86c416a79f"
}

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
