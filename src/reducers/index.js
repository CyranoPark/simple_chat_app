import { combineReducers } from 'redux';
import chatList from './chatList';
import entireMessages from './entireMessages';

export default combineReducers({
  chatList,
  entireMessages
});
