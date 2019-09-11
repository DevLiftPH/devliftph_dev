// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvpIHksMWcI-6r4NMOkdofPd3LCOuo6gk",
  authDomain: "devliftph-77214.firebaseapp.com",
  databaseURL: "https://devliftph-77214.firebaseio.com",
  projectId: "devliftph-77214",
  storageBucket: "devliftph-77214.appspot.com",
  messagingSenderId: "187189827021",
  appId: "1:187189827021:web:feb340cd5b298f7de06084"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore connection
const db = firebase.firestore();