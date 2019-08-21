import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatList from '../component/ChatList';
import ChatWindow from '../component/ChatWindow';
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
      isLoadingInitialChats,
      isLoadingMessages,
      isLoadingCurrentChats,
      isLoadingCurMessages,
      onChatWindowLoad,
      onMessageSendBtnClick
    } = this.props;

    if (isLoadingInitialChats || isLoadingMessages) {
      return null;
    }

    return (
      <div className="App">
        <Switch>
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
                isLoadingChatList={isLoadingInitialChats}
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
                isLoadingCurrentChats={isLoadingCurrentChats}
                isCurMessagesLoading={isLoadingCurMessages}
                onChatWindowLoad={onChatWindowLoad}
                onMessageSendBtnClick={onMessageSendBtnClick}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}
