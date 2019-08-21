import { connect } from 'react-redux';
import {
  requestInitialChatList,
  recieveInitialChatList,
  requestInitialMessages,
  recieveInitialMessages,
  requestCurrentChat,
  recieveCurrentChat,
  requestCurrentMessages,
  recieveCurrentMessages,
  sendMessage
} from '../actions';
import {
  getInitialChatList,
  getInitialMessages
} from '../utils/api';
import { addInitialMessageToChatList, sortObjectsInArrayByDate } from '../utils/utils';
import App from '../component/App';

const mapStateToProps = (state) => {
  if (state.entireMessages.messages.length) {
    addInitialMessageToChatList(state.chatList.chats, state.entireMessages.messages)
  }
  const newProps = {
    chatList : sortObjectsInArrayByDate(state.chatList.chats, 'lastUpdate'),
    messages : state.entireMessages.messages,
    currentChat : state.chatList.currentChat,
    currentMessages : state.entireMessages.currentMessages,
    isLoadingInitialChats: state.chatList.isLoadingInitialChats,
    isLoadingCurrentChats: state.chatList.isLoadingCurrentChats,
    isLoadingMessages : state.entireMessages.isMessagesLoading,
    isLoadingCurMessages : state.entireMessages.isLoadingCurMessages
  };

  return newProps;
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialDataLoad() {
      dispatch(requestInitialChatList());
      dispatch(requestInitialMessages());
      getInitialChatList()
        .then(chatList => {
          getInitialMessages()
            .then(messages => {
              dispatch(recieveInitialChatList(chatList));
              dispatch(recieveInitialMessages(messages));
            }).catch(err => {
              console.error(err);
            });
        });
    },
    onChatWindowLoad(id) {
      dispatch(requestCurrentMessages());
      dispatch(requestCurrentChat());
      dispatch(recieveCurrentMessages(id));
      dispatch(recieveCurrentChat(id));
    },
    onMessageSendBtnClick(text, id) {
      dispatch(sendMessage(text, id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
