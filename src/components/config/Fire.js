import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDWmCYxAtC_0Ia_FXgl21W0a-mHTU_12s0",
  authDomain: "pomodoro-ae0c1.firebaseapp.com",
  databaseURL: "https://pomodoro-ae0c1.firebaseio.com",
  projectId: "pomodoro-ae0c1",
  storageBucket: "pomodoro-ae0c1.appspot.com",
  messagingSenderId: "524255507909",
  appId: "1:524255507909:web:39cb744a1b31814c3887ac",
  measurementId: "G-ELEF0CLMZ7"
};
const Fire = firebase.initializeApp(firebaseConfig);
export default Fire;