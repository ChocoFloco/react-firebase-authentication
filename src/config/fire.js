import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC7mybMry1LzLSlpsmXMlN_9LbcPogoW2g",
  authDomain: "inverseprivate-304e0.firebaseapp.com",
  projectId: "inverseprivate-304e0",
  storageBucket: "inverseprivate-304e0.appspot.com",
  messagingSenderId: "246587992179",
  appId: "1:246587992179:web:aa224363a30a5e532ca206",
  measurementId: "G-VWNPDLNQJ0"
};

const fire = firebase.initializeApp(config);
export default fire;
