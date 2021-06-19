import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyBHTqS9yxMX7BY_MX8xp-VdRF0brLc_S3U",
    authDomain: "storyhub-c8e24.firebaseapp.com",
    projectId: "storyhub-c8e24",
    storageBucket: "storyhub-c8e24.appspot.com",
    messagingSenderId: "623995711505",
    appId: "1:623995711505:web:88ec9898e68ac1a381c1b0"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  export default firebase.firestore();
