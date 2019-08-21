import { filterListById, Message } from '../utils/utils';
import {
  REQUEST_INIT_MESSAGES,
  RECIEVE_INIT_MESSAGES,
  REQUEST_CURRENT_MESSAGES,
  RECIEVE_CURRENT_MESSAGES,
  SEND_MESSAGE
} from "../constants/actionType";

const initialState = {
  messages: [],
  currentMessages: [],
  isMessagesLoading: true,
  isLoadingCurMessages : true
};

export default function entireMessages(state = initialState, action) {
  switch (action.type) {
  case REQUEST_INIT_MESSAGES:
    return Object.assign({...state}, {
      isMessagesLoading: true
    });

  case RECIEVE_INIT_MESSAGES:
    return Object.assign({...state}, {
      messages: action.messages,
      isMessagesLoading: false
    });

  case REQUEST_CURRENT_MESSAGES:
    return Object.assign({...state}, {
      isLoadingCurMessages: true
    });

  case RECIEVE_CURRENT_MESSAGES:
    const currentMessages = filterListById(state.messages, action.id);
    return Object.assign({...state}, {
      currentMessages: currentMessages.message,
      isLoadingCurMessages: false
    });

  case SEND_MESSAGE:
    const currentMessage = filterListById(state.messages, action.id);
    const targetIndex = state.messages.indexOf(currentMessage);
    const newCurMessage = new Message(action.text);

    const newMessages = [...state.messages];
    newMessages[targetIndex].message.push(newCurMessage);

    return Object.assign({...state}, {
      messages: newMessages,
      currentMessages: [...currentMessage.message]
    });

    default:
    return state;
  };
}
