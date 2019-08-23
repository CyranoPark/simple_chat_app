import { combineReducers } from 'redux';
import entireChatList from './entireChatList';
import entireMessages from './entireMessages';
import currentChat from './currentChat';
import currentMessages from './currentMessages';

export default combineReducers({
  entireChatList,
  entireMessages,
  currentChat,
  currentMessages
});
