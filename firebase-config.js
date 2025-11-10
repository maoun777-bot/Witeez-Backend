// firebase-config.js
// IMPORTANT: Replace this with your WEB APP config from Firebase Console
// This is different from your iOS config!

const firebaseConfig = {
  apiKey: "AIzaSyBEhJPMMmD-JizrMuFEwaAOnZmohHfJE88", // Different from iOS
  authDomain: "tizzup-7019e.firebaseapp.com",
  projectId: "tizzup-7019e",
  storageBucket: "tizzup-7019e.firebasestorage.app",
  messagingSenderId: "836394842308",
  appId: "1:836394842308:web:4cc990952da007cb53f191" // Different from iOS app ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Test Firebase connection
try {
  console.log("Firebase initialized successfully");
  console.log("Project:", firebase.app().options.projectId);
  console.log("Storage bucket:", firebase.app().options.storageBucket);
  console.log("Auth domain:", firebase.app().options.authDomain);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}