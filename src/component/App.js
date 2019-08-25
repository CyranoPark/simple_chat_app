import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChatList from '../component/ChatList';
import ChatWindow from '../component/ChatWindow';
import LoadingModal from './LoadingModal';
import '../style/App.css';

export default class App extends Component {
  componentDidMount() {
    this.props.initialDataLoad();
  }

  render() {
    const {
      chatList,
      currentChat,
      currentMessages,
      messageBoxValue,
      newMessageDatetime,
      isLoadingInitialChats,
      isLoadingCurrentChat,
      isFetchInitDataError,
      isFetchCurDataError,
      initialDataLoad,
      onChatWindowLoad,
      onMessageSendBtnClick,
      onInputBoxChange
    } = this.props;

    return (
      <div className="App">
        <div className="chat-app">
          {
            isLoadingInitialChats ?
            <LoadingModal />
            : (
              <>
                <Route
                  exact path="/"
                  render={() => <Redirect to="/chatList" />}
                />
                <Route
                  exact path="/chatList"
                  render={(routeProps) =>
                    <ChatList
                      {...routeProps}
                      chatList={chatList}
                      initialDataLoad={initialDataLoad}
                      isFetchInitDataError={isFetchInitDataError}
                    />
                  }
                />
                <Route
                  exact path="/chatList/:chatId"
                  render={(routeProps) =>
                    <ChatWindow
                      {...routeProps}
                      currentChat={currentChat}
                      currentMessages={currentMessages}
                      messageBoxValue={messageBoxValue}
                      newMessageDatetime={newMessageDatetime}
                      isLoadingCurrentChat={isLoadingCurrentChat}
                      isFetchCurDataError={isFetchCurDataError}
                      onChatWindowLoad={onChatWindowLoad}
                      onMessageSendBtnClick={onMessageSendBtnClick}
                      onInputBoxChange={onInputBoxChange}
                    />
                  }
                />
              </>
            )
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  chatList: PropTypes.array.isRequired,
  currentChat: PropTypes.object.isRequired,
  currentMessages: PropTypes.array.isRequired,
  isLoadingInitialChats: PropTypes.bool.isRequired,
  isLoadingCurrentChat: PropTypes.bool.isRequired,
  onChatWindowLoad: PropTypes.func.isRequired,
  onMessageSendBtnClick : PropTypes.func.isRequired,
};
