import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFK7FeB3F4DQRbNG9MUlZjPTQF7CQ9Fu8",
    authDomain: "live-chat-room-7bf3a.firebaseapp.com",
    projectId: "live-chat-room-7bf3a",
    storageBucket: "live-chat-room-7bf3a.appspot.com",
    messagingSenderId: "561500397861",
    appId: "1:561500397861:web:2cb02c17b5790c1f69facc",
    measurementId: "G-Q2Y6CTLW5K",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };