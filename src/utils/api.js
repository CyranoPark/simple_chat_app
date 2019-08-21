const chatList = require('../data/chatList.json');
const messageHistory = require('../data/messages.json');

export const getInitialChatList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chatList);
    }, 100);
  });
};

export const getInitialMessages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messageHistory);
    }, 100);
  });
};
