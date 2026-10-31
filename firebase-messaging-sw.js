
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC3CQH-6CPFEzHzvaq4_lbGpUOE2prSotM",
  authDomain: "hrs-srl-notifications.firebaseapp.com",
  projectId: "hrs-srl-notifications",
  storageBucket: "hrs-srl-notifications.firebasestorage.app",
  messagingSenderId: "981178929755",
  appId: "1:981178929755:web:c00ee29cad57d3c0bf657e",
  measurementId: "G-7N8JGQC6X3"
});

const messaging = firebase.messaging();
