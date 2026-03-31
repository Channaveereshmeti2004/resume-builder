import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // ✅ ADD THIS
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFHGzVb0feOVg4tNDuoJZFC3SKWVfZ0bk",
  authDomain: "resume-builder-dddf4.firebaseapp.com",
  projectId: "resume-builder-dddf4",
  storageBucket: "resume-builder-dddf4.firebasestorage.app",
  messagingSenderId: "771553820276",
  appId: "1:771553820276:web:bd6fa23ce3cbf2f17bdb21",
  measurementId: "G-0VDQL1KLYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ ADD THIS (VERY IMPORTANT)
export const auth = getAuth(app);

// Optional
const analytics = getAnalytics(app);