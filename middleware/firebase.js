// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require('firebase/database');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDu2mreICjTWGARDmlFsXbOBNfMgYbBLtg",
    authDomain: "blog-5679e.firebaseapp.com",
    databaseURL: "https://blog-5679e.firebaseio.com",
    projectId: "blog-5679e",
    storageBucket: "gs://blog-5679e.appspot.com",
    messagingSenderId: "684163350837",
    appId: "1:684163350837:web:751e52a891778cb9afcc7c",
    measurementId: "G-HPPTQFFKF8"
};
// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}