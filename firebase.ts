// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDa9BW5uu9lbUYrHnymLHCOlJ8a7_xvT5Q",
    authDomain: "netflix-clone-8f9ab.firebaseapp.com",
    projectId: "netflix-clone-8f9ab",
    storageBucket: "netflix-clone-8f9ab.appspot.com",
    messagingSenderId: "992569058738",
    appId: "1:992569058738:web:3d91e381f035c5d78db0ab"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }