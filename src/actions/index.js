import {
  REQUEST_INIT_CHAT_LIST,
  RECIEVE_INIT_CHAT_LIST,
  REQUEST_CURRENT_CHAT,
  RECIEVE_CURRENT_CHAT,
  REQUEST_CURRENT_MESSAGES,
  RECIEVE_CURRENT_MESSAGES,
  REQUEST_SEND_MESSAGE,
  RECIEVE_SEND_MESSAGE,
  CHANGE_INPUTBOX_CHANGE,
  FAIURE_FETCH_INIT_DATA,
  FAIURE_FETCH_CURRENT_DATA
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

export const requestCurrentChat = () => {
  return {
    type: REQUEST_CURRENT_CHAT,
  };
};

export const recieveCurrentChat = (chats) => {
  return {
    type: RECIEVE_CURRENT_CHAT,
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

export const requestSendMessage = (newMessage) => {
  return {
    type: REQUEST_SEND_MESSAGE,
    newMessage,
    newMessageDatetime : newMessage.datetime
  };
};

export const recieveSendMessage = (messages) => {
  return {
    type: RECIEVE_SEND_MESSAGE,
    messages
  };
};

export const changeInputBoxValue = (text) => {
  return {
    type: CHANGE_INPUTBOX_CHANGE,
    text
  };
};

export const failureFetchInitData = () => {
  return {
    type: FAIURE_FETCH_INIT_DATA
  };
};

export const failureFetchCurData = () => {
  return {
    type: FAIURE_FETCH_CURRENT_DATA
  };
};
