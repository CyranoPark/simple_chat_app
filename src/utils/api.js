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
  let getInitialMessage = [];
  return new Promise((resolve) => {
    database.ref('/chatlist').once('value').then(function(snapshot) {
      const chatList = snapshot.val();
      chatList.forEach((chat) => {
        getInitialMessage.push(
          getMessagesById(chat.id).then(({ message }) => {
            chat.initialMessage = message[message.length - 1].text
            chat.lastUpdate = message[message.length - 1].datetime
            return chat;
          })
        );
      });
      resolve(Promise.all(getInitialMessage));
    });
  });
};

export const getMessagesById = (id) => {
  return new Promise((resolve) => {
    database.ref(`/messages/${id}`).once('value').then(function(snapshot) {
      const data = snapshot.val();
      resolve(data)
    });
  });
};

export const writeMessage = (id, newMessage, existMessages) => {
  return new Promise((resolve) => {
    // database.ref(`/messages/${id}`).once('value')
    //   .then(function(snapshot) {
        // const targetMessages = snapshot.val().message;
        const messages = {
          id : id,
          message : [
            ...existMessages,
            newMessage
          ]
        };
        database.ref(`/messages/${id}`).set(messages);
        resolve(messages);
      // });
  });
};
