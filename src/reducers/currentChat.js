import {
  REQUEST_CURRENT_CHAT,
  RECIEVE_CURRENT_CHAT,
  FAIURE_FETCH_CURRENT_DATA
} from "../constants/actionType";

const initialState = {
  currentChat: {},
  isLoadingCurrentChats : true,
  isFetchCurChatError : false
};

export default function entireChatList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CURRENT_CHAT:
      return Object.assign({...state}, {
        currentChat: {},
        isLoadingCurrentChats: true
      });

    case RECIEVE_CURRENT_CHAT:
      return Object.assign({...state}, {
        currentChat: action.chats,
        isLoadingCurrentChats: false
      });

    case FAIURE_FETCH_CURRENT_DATA:
      return Object.assign({...state}, {
        currentChat: {},
        isFetchCurChatError: true
      });

    default:
      return state;
    }
}
