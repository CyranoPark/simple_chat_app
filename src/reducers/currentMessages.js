import {
  REQUEST_CURRENT_MESSAGES,
  RECIEVE_CURRENT_MESSAGES,
  REQUEST_SEND_MESSAGE,
  RECIEVE_SEND_MESSAGE
} from "../constants/actionType";

const initialState = {
  currentMessage: null,
  isLoadingCurMessages : true
};


export default function currentMessages(state = initialState, action) {
  switch (action.type) {

  case REQUEST_CURRENT_MESSAGES:
    return Object.assign({...state}, {
      isLoadingCurMessages: true
    });

  case RECIEVE_CURRENT_MESSAGES:
    return Object.assign({...state}, {
      currentMessage: action.messages,
      isLoadingCurMessages: false
    });

  case REQUEST_SEND_MESSAGE:
    return Object.assign({...state}, {
      isLoadingCurMessages: true
    });

  case RECIEVE_SEND_MESSAGE:
    return Object.assign({...state}, {
      isLoadingCurMessages: false,
      currentMessage: action.messages
    });

    default:
    return state;
  };
}