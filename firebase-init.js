// firebase-init.js
// Inicializa Firebase con el SDK "compat" (funciona con <script> normal, sin Node/npm)
 
const firebaseConfig = {
  apiKey: "AIzaSyAtYGWQPG6c38aIrfVUmf0Kz1-pG80UmvY",
  authDomain: "invitacion-bautizo-4764b.firebaseapp.com",
  projectId: "invitacion-bautizo-4764b",
  storageBucket: "invitacion-bautizo-4764b.firebasestorage.app",
  messagingSenderId: "1064531139919",
  appId: "1:1064531139919:web:cc7101b1efc48aea28f93a",
  measurementId: "G-JCZ9V9C6LT"
};
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
 