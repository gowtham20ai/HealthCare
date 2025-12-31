import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC1Sef1tVSVdGOLYeokSvLmT2weCjOQPn8",
  authDomain: "healthcare-dde0f.firebaseapp.com",
  databaseURL: "https://healthcare-dde0f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "healthcare-dde0f",
  storageBucket: "healthcare-dde0f.firebasestorage.app",
  messagingSenderId: "741531207902",
  appId: "1:741531207902:web:1a94038fbac91e0377da4f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
