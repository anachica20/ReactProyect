//Configuracion de conexion de firebase

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDIjMr5pXjWcJ_jxANLKumBzRpzFquXf1c",
  authDomain: "desarrolloweb-3777a.firebaseapp.com",
  projectId: "desarrolloweb-3777a",
  storageBucket: "desarrolloweb-3777a.firebasestorage.app",
  messagingSenderId: "473444559508",
  appId: "1:473444559508:web:605d4e5454a0f83675e281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);