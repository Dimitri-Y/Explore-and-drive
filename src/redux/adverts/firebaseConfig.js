import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBhZ3ftucYD6tRidMl1M7ydNTI8nNvgdiU',
  authDomain: 'carsdb-4b4f2.firebaseapp.com',
  projectId: 'carsdb-4b4f2',
  storageBucket: 'carsdb-4b4f2.appspot.com',
  messagingSenderId: '1052534177127',
  appId: '1:1052534177127:web:9cf0d2e00234d94d7443c2',
  measurementId: 'G-S1Y3VNHK58',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
