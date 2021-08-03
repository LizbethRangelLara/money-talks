import app from 'firebase/app';
import 'firebase/auth';
import { config } from 'yargs';

const firebaseConfig = {
    apiKey: "AIzaSyBpYSQ1AzXUBY3fg9LHFtfbbJxh-3HUjZ4",
    authDomain: "learn-62474.firebaseapp.com",
    databaseURL: "https://learn-62474-default-rtdb.firebaseio.com",
    projectId: "learn-62474",
    storageBucket: "learn-62474.appspot.com",
    messagingSenderId: "455733740667",
    appId: "1:455733740667:web:b87ccb8147e98a52270ede",
    measurementId: "G-TN2LVWCVLK"
  };

  class Firebase {
      constructor(){
          app.initializeApp(config);

          this.auth = app.auth();
      }

      //Auth API

      doCreateUserWithEmailAndPassword =(email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordRessetEmail(email);

      doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }



  export default Firebase;