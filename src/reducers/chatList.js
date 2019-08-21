import { filterListById } from '../utils/utils';
import {
  REQUEST_INIT_CHAT_LIST,
  RECIEVE_INIT_CHAT_LIST,
  REQUEST_CURRENT_CHAT,
  RECIEVE_CURRENT_CHAT
} from "../constants/actionType";

const initialState = {
  chats: [],
  currentChat: [],
  isLoadingInitialChats: true,
  isLoadingCurrentChats : true
};

export default function chatList(state = initialState, action) {
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

  case REQUEST_CURRENT_CHAT:
    return Object.assign({...state}, {
      isLoadingCurrentChats: true
    });

  case RECIEVE_CURRENT_CHAT:
    let currentChat = filterListById(state.chats, action.id);
    if (!currentChat) {
      currentChat = [];
    }

    return Object.assign({...state}, {
      currentChat: currentChat,
      isLoadingCurrentChats: false
    });

  default:
    return state;
  }
}
