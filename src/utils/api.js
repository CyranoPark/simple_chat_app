const chatList = require('../data/chatList.json');
const messageHistory = require('../data/messages.json');

export const getInitialChatList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chatList);
    }, 500);
  });
};

export const getInitialMessages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messageHistory);
    }, 500);
  });
};
