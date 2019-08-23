import {
  REQUEST_INIT_CHAT_LIST,
  RECIEVE_INIT_CHAT_LIST,
  REQUEST_CURRENT_CHAT,
  RECIEVE_CURRENT_CHAT,
  REQUEST_CURRENT_MESSAGES,
  RECIEVE_CURRENT_MESSAGES,
  REQUEST_SEND_MESSAGE,
  RECIEVE_SEND_MESSAGE
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

export const requestCurrentMessages = () => {
  return {
    type: REQUEST_CURRENT_MESSAGES,
  };
};

export const recieveCurrentMessages = (messages) => {
  return {
    type: RECIEVE_CURRENT_MESSAGES,
    messages
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

export const requestSendMessage = () => {
  return {
    type: REQUEST_SEND_MESSAGE
  };
};


export const recieveSendMessage = (messages) => {
  return {
    type: RECIEVE_SEND_MESSAGE,
    messages
  };
};

