import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC_3-xLqr6fn1FGxiEtZqzBP1w2v2yBAJU",
  authDomain: "lunchrush-71ce0.firebaseapp.com",
  databaseURL: "https://lunchrush-71ce0.firebaseio.com",
  projectId: "lunchrush-71ce0",
  storageBucket: "lunchrush-71ce0.appspot.com",
  messagingSenderId: "589736740090"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
