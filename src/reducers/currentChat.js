import {
  REQUEST_CURRENT_CHAT,
  RECIEVE_CURRENT_CHAT
} from "../constants/actionType";

const initialState = {
  currentChatId: null,
  isLoadingCurrentChats : true
};

export default function entireChatList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CURRENT_CHAT:
      return Object.assign({...state}, {
        isLoadingCurrentChats: true
      });

    case RECIEVE_CURRENT_CHAT:
      return Object.assign({...state}, {
        currentChatId: action.id,
        isLoadingCurrentChats: false
      });

    default:
      return state;
    }
}
