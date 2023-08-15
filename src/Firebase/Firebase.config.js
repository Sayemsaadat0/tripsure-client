import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

export default app

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC_QIyRJmUAp-_IJLAxvxtyBwgXH-zTIn8",
//   authDomain: "dimple-firebase-d7776.firebaseapp.com",
//   projectId: "dimple-firebase-d7776",
//   storageBucket: "dimple-firebase-d7776.appspot.com",
//   messagingSenderId: "519256644737",
//   appId: "1:519256644737:web:300798e46268478f010180"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app