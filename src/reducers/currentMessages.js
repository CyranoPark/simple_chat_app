import {
  REQUEST_CURRENT_MESSAGES,
  RECIEVE_CURRENT_MESSAGES,
  REQUEST_SEND_MESSAGE,
  RECIEVE_SEND_MESSAGE,
  CHANGE_INPUTBOX_CHANGE,
  FAIURE_FETCH_CURRENT_DATA
} from "../constants/actionType";

const initialState = {
  currentMessage: [],
  messageBoxValue: '',
  newMessageDatetime : null,
  isLoadingCurMessages : true,
  isFetchCurMessagesError : false
};

export default function currentMessages(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENT_MESSAGES:
    return Object.assign({...state}, {
      currentMessage: [],
      isLoadingCurMessages: true
    });

  case RECIEVE_CURRENT_MESSAGES:
    return Object.assign({...state}, {
      currentMessage: action.messages,
      isLoadingCurMessages: false
    });

  case REQUEST_SEND_MESSAGE:
    return Object.assign({...state}, {
      currentMessage: [
        ...state.currentMessage,
        action.newMessage
      ],
      newMessageDatetime: action.newMessageDatetime,
      isLoadingCurMessages: true
    });

  case RECIEVE_SEND_MESSAGE:
    return Object.assign({...state}, {
      currentMessage: action.messages,
      newMessageDatetime: null,
      isLoadingCurMessages: false
    });

  case FAIURE_FETCH_CURRENT_DATA:
    return Object.assign({...state}, {
      isFetchCurMessagesError: true,
      currentMessage: []
    });

  case CHANGE_INPUTBOX_CHANGE:
    return Object.assign({...state}, {
      messageBoxValue: action.text
    });

    default:
    return state;
  };
}