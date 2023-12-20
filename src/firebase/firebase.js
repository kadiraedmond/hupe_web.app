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

// const firebaseConfig = {
//   apiKey: import.meta.FIREBASE_API_KEY,
//   authDomain: import.meta.FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.FIREBASE_APP_ID,
//   measurementId: import.meta.FIREBASE_MEASUREMENT_ID
// };

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
