import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  projectId: "text-storage-monky",
  appId: "1:266455082026:web:3a5fd85c2bb837f601cf53",
  databaseURL: "https://text-storage-monky-default-rtdb.firebaseio.com",
  storageBucket: "text-storage-monky.appspot.com",
  apiKey: "AIzaSyAQGYOZxlEf0wWeE3I7SV6i1GyvwhfJzF8",
  authDomain: "text-storage-monky.firebaseapp.com",
  messagingSenderId: "266455082026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Create a reference to 'texts' in our database
export const textsRef = ref(db, 'texts');
