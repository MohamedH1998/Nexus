import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/database';
import 'firebase/compat/firestore';


const firebaseConfig = ({
    apiKey: "AIzaSyAb7Ib8f6RD18jIsyHSiFoBXTpbJeXWnI0",
    authDomain: "nexus-37829.firebaseapp.com",
    projectId: "nexus-37829",
    storageBucket: "nexus-37829.appspot.com",
    messagingSenderId: "992852901687",
    appId: "1:992852901687:web:09c7410b151870d5cb24b2",
    measurementId: "G-1BQPJ3S0HS"
  })

  const fireAuth = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
  
  // const fireDb = fireAuth.database().ref('UserPreferences')
  
  const fireDb = firebase.firestore();

  export {auth, googleAuthProvider, facebookAuthProvider, fireDb}
