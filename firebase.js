import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC_AZkVM77QfWMFFIgBfV36024ttVfGbGQ",
    authDomain: "react-native-twitter-e807e.firebaseapp.com",
    projectId: "react-native-twitter-e807e",
    storageBucket: "react-native-twitter-e807e.appspot.com",
    messagingSenderId: "243800244991",
    appId: "1:243800244991:web:8f527b745587bdb22982ca",
    measurementId: "G-JX62CMK630"
};


let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

export { firebase }
