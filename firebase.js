// firebase.js

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAt-H3QXKxrRtHo2ym-QvHMA5K5wWg9r3w",
  authDomain: "jameasaifiyahportal.firebaseapp.com",
  projectId: "jameasaifiyahportal",
  storageBucket: "jameasaifiyahportal.appspot.com",  // ✅ corrected domain
  messagingSenderId: "78639666781",
  appId: "1:78639666781:web:8ce9eaf25113c891765fb4",
  measurementId: "G-7KKGE2P58L"
};

// ✅ Initialize Firebase (compat syntax)
firebase.initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = firebase.firestore();

console.log("🔥 Firebase connected successfully!");
