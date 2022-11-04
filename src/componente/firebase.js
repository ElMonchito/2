// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyADXZhJK7KPTrD6d2u_nGg47sFoTTYUTP0',
    authDomain: 'elmonchito-a937c.firebaseapp.com',
    projectId: 'elmonchito-a937c',
    storageBucket: "elmonchito-a937c.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
