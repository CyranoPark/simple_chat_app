import { connect } from 'react-redux';
import App from '../component/App';
import * as actions from '../actions';
import { getInitialChatList, getInitialMessages } from '../utils/api';
import {
  addInitialMessageToChatList,
  sortObjectsInArrayByDate,
  filterChatListById
} from '../utils/utils';

const {
  requestInitialChatList,
  recieveInitialChatList,
  requestInitialMessages,
  recieveInitialMessages,
  requestCurrentChat,
  recieveCurrentChat,
  requestCurrentMessages,
  recieveCurrentMessages,
  sendMessage,
  completeSendMessage
} = actions;

const mapStateToProps = (state) => {
  const { chats, isLoadingInitialChats } = state.entireChatList;
  const { messages, isLoadingMessages } = state.entireMessages;
  const { currentChatId, isLoadingCurrentChats } = state.currentChat;
  const { currentMessageId, isLoadingCurMessages } = state.currentMessages;

  const currentChat = currentChatId ? filterChatListById(chats, currentChatId) : {};
  let currentMessages = currentMessageId ? messages[currentMessageId + ''].message : [];

  if (Object.keys(messages).length) {
    addInitialMessageToChatList(chats, messages);
  }

  const newProps = {
    chatList: sortObjectsInArrayByDate(chats, 'lastUpdate'),
    messages: messages,
    currentChat: currentChat,
    currentMessages: currentMessages,
    isLoadingInitialChats: isLoadingInitialChats,
    isLoadingCurrentChats: isLoadingCurrentChats,
    isLoadingMessages: isLoadingMessages,
    isLoadingCurMessages: isLoadingCurMessages
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
        }).catch(err => {
          console.error(err);
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
      dispatch(completeSendMessage());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
