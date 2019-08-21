import {
  REQUEST_INIT_CHAT_LIST,
  RECIEVE_INIT_CHAT_LIST,
  REQUEST_INIT_MESSAGES,
  RECIEVE_INIT_MESSAGES,
  REQUEST_CURRENT_CHAT,
  RECIEVE_CURRENT_CHAT,
  REQUEST_CURRENT_MESSAGES,
  RECIEVE_CURRENT_MESSAGES,
  SEND_MESSAGE
} from '../constants/actionType';

export const requestInitialChatList = () => {
  return {
    type: REQUEST_INIT_CHAT_LIST,
  };
};

export const recieveInitialChatList = (chats) => {
  return {
    type: RECIEVE_INIT_CHAT_LIST,
    chats
  };
};

export const requestInitialMessages = () => {
  return {
    type: REQUEST_INIT_MESSAGES,
  };
};

export const recieveInitialMessages = (messages) => {
  return {
    type: RECIEVE_INIT_MESSAGES,
    messages
  };
};

export const requestCurrentMessages = () => {
  return {
    type: REQUEST_CURRENT_MESSAGES,
  };
};

export const recieveCurrentMessages = (id) => {
  return {
    type: RECIEVE_CURRENT_MESSAGES,
    id
  };
};

export const requestCurrentChat = () => {
  return {
    type: REQUEST_CURRENT_CHAT,
  };
};

export const recieveCurrentChat = (id) => {
  return {
    type: RECIEVE_CURRENT_CHAT,
    id
  };
};

export const sendMessage = (text, id) => {
  return {
    type: SEND_MESSAGE,
    text,
    id,
    date: new Date().toISOString()
  };
};
