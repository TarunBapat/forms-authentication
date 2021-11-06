import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDwpsEdD3DTA_PI5RqMH2BHxrr9FcJ8WEE",
  authDomain: "authentication-a24b4.firebaseapp.com",
  projectId: "authentication-a24b4",
  storageBucket: "authentication-a24b4.appspot.com",
  messagingSenderId: "1076329319834",
  appId: "1:1076329319834:web:6c310ec21d9d0a4efa3e23"
});

export const auth = app.auth();
export default app;
