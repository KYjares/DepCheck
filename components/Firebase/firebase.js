import app from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD34FCBh-YXagsU03q8kp8PZxP_59Qtqk4",
  authDomain: "i2o-depcheck.firebaseapp.com",
  databaseURL: "https://i2o-depcheck.firebaseio.com",
  projectId: "i2o-depcheck",
  storageBucket: "i2o-depcheck.appspot.com",
  messagingSenderId: "754357848688",
  appId: "1:754357848688:web:d2e45960304c945fb342b5"
};

app.initializeApp(config);

class Firebase {
  constructor() {
    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

const storage = app.storage();

const db = firebase.firestore();

export { db, firebase, storage, Firebase as default };
