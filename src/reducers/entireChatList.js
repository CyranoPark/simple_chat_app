import {
  REQUEST_INIT_CHAT_LIST,
  RECIEVE_INIT_CHAT_LIST,
  FAIURE_FETCH_INIT_DATA
} from "../constants/actionType";

const initialState = {
  chats: [],
  isLoadingInitialChats: true,
  isFetchInitDataError: false
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

  case FAIURE_FETCH_INIT_DATA:
    return Object.assign({...state}, {
      chats: [],
      isFetchInitDataError: true
    });

  default:
    return state;
  }
}
