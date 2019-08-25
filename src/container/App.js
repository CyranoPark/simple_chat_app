import { connect } from 'react-redux';
import App from '../component/App';
import * as actions from '../actions';
import { getInitialChatList, getMessagesById, getChatsById, writeMessage } from '../utils/api';
import {
  sortObjectsInArrayByDate,
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
  recieveSendMessage,
  changeInputBoxValue,
  failureFetchInitData,
  failureFetchCurData
} = actions;

const mapStateToProps = (state) => {
  const { chats, isLoadingInitialChats, isFetchInitDataError } = state.entireChatList;
  const { currentChat, isLoadingCurrentChats, isFetchCurChatError } = state.currentChat;
  const { currentMessage, messageBoxValue, newMessageDatetime, isLoadingCurMessages, isFetchCurMessagesError } = state.currentMessages;

  const isLoadingCurrentChat = isLoadingCurrentChats || isLoadingCurMessages;
  const isFetchCurDataError = isFetchCurChatError || isFetchCurMessagesError;

  return {
    chatList: sortObjectsInArrayByDate(chats, 'lastUpdate'),
    currentChat: currentChat,
    currentMessages: currentMessage,
    messageBoxValue: messageBoxValue,
    newMessageDatetime: newMessageDatetime,
    isLoadingInitialChats: isLoadingInitialChats,
    isLoadingCurrentChat: isLoadingCurrentChat,
    isFetchInitDataError: isFetchInitDataError,
    isFetchCurDataError: isFetchCurDataError
  };
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
          dispatch(failureFetchInitData());
        });
    },
    onChatWindowLoad(id) {
      dispatch(requestCurrentMessages());
      dispatch(requestCurrentChat());

      Promise.all([getChatsById(id), getMessagesById(id)])
        .then(([chats, messages]) => {
          dispatch(recieveCurrentChat(chats));
          dispatch(recieveCurrentMessages(messages.message));
        }).catch(err => {
          console.error(err);
          dispatch(failureFetchCurData());
        });
    },
    onMessageSendBtnClick(id, text) {
      const newMessage = new Message(text);
      dispatch(requestSendMessage(newMessage));
      writeMessage(id, newMessage)
      .then(messages => {
        dispatch(recieveSendMessage(messages));
      }).then(() => {
        getInitialChatList()
        .then(chatList => {
          dispatch(recieveInitialChatList(chatList));
        }).catch(err => {
          console.error(err);
          dispatch(failureFetchInitData());
        });
      }).catch(err => {
        console.error(err);
        dispatch(failureFetchCurData());
      });
    },
    onInputBoxChange(text) {
      dispatch(changeInputBoxValue(text));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
