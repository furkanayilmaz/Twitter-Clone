import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC_AZkVM77QfWMFFIgBfV36024ttVfGbGQ",
    authDomain: "react-native-twitter-e807e.firebaseapp.com",
    projectId: "react-native-twitter-e807e",
    storageBucket: "react-native-twitter-e807e.appspot.com",
    messagingSenderId: "243800244991",
    appId: "1:243800244991:web:8f527b745587bdb22982ca",
    measurementId: "G-JX62CMK630"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };