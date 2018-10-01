import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCd1F2DwniRCcsDH2Fba5s4g_lQs5iUOnQ",
  authDomain: "trolloclone.firebaseapp.com",
  databaseURL: "https://trolloclone.firebaseio.com",
  projectId: "trolloclone",
  storageBucket: "trolloclone.appspot.com",
  messagingSenderId: "616878298886"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
