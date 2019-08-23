import {
  REQUEST_INIT_CHAT_LIST,
  RECIEVE_INIT_CHAT_LIST
} from "../constants/actionType";

const initialState = {
  chats: [],
  isLoadingInitialChats: true
};

export default function entireChatList(state = initialState, action) {
  switch (action.type) {
  case REQUEST_INIT_CHAT_LIST:
    return Object.assign({...state}, {
      isLoadingInitialChats: true
    });

  case RECIEVE_INIT_CHAT_LIST:
    return Object.assign({...state}, {
      chats: action.chats,
      isLoadingInitialChats: false
    });

  default:
    return state;
  }
}
