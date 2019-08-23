import { connect } from 'react-redux';
import App from '../component/App';
import * as actions from '../actions';
import { getInitialChatList, getMessagesById, writeMessage } from '../utils/api';
import {
  sortObjectsInArrayByDate,
  filterChatListById,
  Message
} from '../utils/utils';

const {
  requestInitialChatList,
  recieveInitialChatList,
  requestCurrentChat,
  recieveCurrentChat,
  requestCurrentMessages,
  recieveCurrentMessages,
  requestSendMessage,
  recieveSendMessage
} = actions;

const mapStateToProps = (state) => {
  const { chats, isLoadingInitialChats } = state.entireChatList;
  const { currentChatId, isLoadingCurrentChats } = state.currentChat;
  const { currentMessage, isLoadingCurMessages } = state.currentMessages;
  const currentChat = currentChatId ? filterChatListById(chats, currentChatId) : {};
  let currentMessages = currentMessage ? currentMessage.message : [];

  const newProps = {
    chatList: sortObjectsInArrayByDate(chats, 'lastUpdate'),
    currentChat: currentChat,
    currentMessages: currentMessages,
    isLoadingInitialChats: isLoadingInitialChats,
    isLoadingCurrentChats: isLoadingCurrentChats,
    isLoadingCurMessages: isLoadingCurMessages
  };

  return newProps;
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialDataLoad() {
      dispatch(requestInitialChatList());
      getInitialChatList()
        .then(chatList => {
          dispatch(recieveInitialChatList(chatList));
        }).catch(err => {
          console.error(err);
        });
    },
    onChatWindowLoad(id) {
      dispatch(requestCurrentMessages());
      dispatch(requestCurrentChat());

      dispatch(recieveCurrentChat(id));

      getMessagesById(id).then(messages => {
        dispatch(recieveCurrentMessages(messages));
      }).catch(err => {
        console.error(err);
      });
    },
    onMessageSendBtnClick(id, text, existMessages) {
      const newMessage = new Message(text);
      dispatch(requestSendMessage());
      writeMessage(id, newMessage, existMessages)
      .then(messages => {
        dispatch(recieveSendMessage(messages));
      }).then(
        getInitialChatList()
          .then(chatList => {
            dispatch(recieveInitialChatList(chatList));
          }).catch(err => {
            console.error(err);
          })
      ).catch(err => {
        console.error(err);
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
