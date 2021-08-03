import firebase from "firebase";

require('firebase/firestore');


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

  firebase.initializeApp(config);

  export const storageKey = 'KEY_FOR_LOCAL-STORAGE';
  export const db =firebase.firestore();
  export const firebaseAuth = firebase.auth;
  export const minTime = new Date();
  minTime.setHours(7,0,0);

  export const maxTime = new Date();
  maxTime.setHours(20,0,0);

  export const calenderInitialState = {
      events : [],
      equipments : [],
      people : [],
      modal : {
          id :null,
          title : null,
          desc : null,
          start : new Date(2021, 4, 4, 7, 0, 0),
          end: new Date(2021, 4, 4, 8 , 0 , 0),
      },

      modalOpen : false,
      equipmentsOpen : false,
      peopleOpen : false,

  };
