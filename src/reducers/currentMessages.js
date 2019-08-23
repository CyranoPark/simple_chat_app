import { Message } from '../utils/utils';
import {
  REQUEST_CURRENT_MESSAGES,
  RECIEVE_CURRENT_MESSAGES,
  SEND_MESSAGE,
  COMPLETE_SEND_MESSAGE
} from "../constants/actionType";

const initialState = {
  currentMessageId: null,
  newMessages: {},
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
      currentMessageId: action.id,
      isLoadingCurMessages: false
    });

  case SEND_MESSAGE:
    return Object.assign({...state}, {
      newMessages: new Message(action.text)
    });

  case COMPLETE_SEND_MESSAGE:
    return Object.assign({...state}, {
      newMessages: {}
    });

    default:
    return state;
  };
}