import { combineReducers } from 'redux';
import entireChatList from './entireChatList';
import currentChat from './currentChat';
import currentMessages from './currentMessages';

export default combineReducers({
  entireChatList,
  currentChat,
  currentMessages
});
