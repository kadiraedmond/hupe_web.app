import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.FIREBASE_API_KEY,
  authDomain: import.meta.AUTH_DOMAIN,
  projectId: import.meta.PROJECT_ID,
  storageBucket: import.meta.STORAGE_BUCKET,
  messagingSenderId: import.meta.MESSAGING_SENDER_ID,
  appId: import.meta.APP_ID,
  measurementId: import.meta.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
