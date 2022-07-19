// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB80nZyp4sbE_D4dsFwk8jUbocFZBYjN3g',
  authDomain: 'fargoapp.firebaseapp.com',
  projectId: 'fargoapp',
  storageBucket: 'fargoapp.appspot.com',
  messagingSenderId: '726898078657',
  appId: '1:726898078657:web:59ef352dc7867abe8e7540',
  measurementId: 'G-ELK83TL33J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   try {
//     await addDoc(collection(db, 'tasks'), {
//       title: title,
//       description: description,
//       completed: false,
//       created: Timestamp.now()
//     })
//     onClose()
//   } catch (err) {
//     alert(err)
//   }
