import { Message } from '../utils/utils';
import {
  REQUEST_INIT_MESSAGES,
  RECIEVE_INIT_MESSAGES,
  SEND_MESSAGE
} from "../constants/actionType";

const initialState = {
  messages: {},
  isLoadingMessages: true
};

export default function copiedMessages(state = initialState, action) {
  switch (action.type) {
  case REQUEST_INIT_MESSAGES:
    return Object.assign({...state}, {
      isLoadingMessages: true
    });

  case RECIEVE_INIT_MESSAGES:
    return Object.assign({...state}, {
      messages: action.messages,
      isLoadingMessages: false
    });

  case SEND_MESSAGE:
    const newMessage = new Message(action.text);
    const copiedMessage = Object.assign({}, {...state.messages});
    copiedMessage[action.id].message.push(newMessage);

    return Object.assign({...state}, {
      messages: copiedMessage,
      isLoadingMessages: false
    });

    default:
    return state;
  };
}
