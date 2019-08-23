const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyAr09KsTGl1iQXJsPOwcP_2JUcyhjflrNU",
  authDomain: "simple-chat-app-4fa42.firebaseapp.com",
  databaseURL: "https://simple-chat-app-4fa42.firebaseio.com",
  projectId: "simple-chat-app-4fa42",
  storageBucket: "",
  messagingSenderId: "285949991106",
  appId: "1:285949991106:web:7f82da2d30c6e8dc"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const getInitialChatList = () => {
  return new Promise((resolve) => {
    database.ref('/chatlist').once('value').then(function(snapshot) {
      const data = snapshot.val();
      resolve(data)
    });
  });
};

export const getInitialMessages = () => {
  return new Promise((resolve) => {
    database.ref('/messages').once('value').then(function(snapshot) {
      const data = snapshot.val();
      resolve(data)
    });
  });
};
