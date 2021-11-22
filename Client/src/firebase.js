import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCh6gapczXcl09KxlqVrsFTD30FbmNlLLo",
  authDomain: "webapp-28f93.firebaseapp.com",
  projectId: "webapp-28f93",
  storageBucket: "webapp-28f93.appspot.com",
  messagingSenderId: "332452710899",
  appId: "1:332452710899:web:54a7605276972e27cd2a86"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;