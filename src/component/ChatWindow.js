import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { changeTimeFormat } from '../utils/utils';
import '../style/ChatWindow.css';

export default class ChatWindow extends Component {
  componentDidMount() {
    this.props.onChatWindowLoad(this.props.match.params.chatId);
  }

  onSendBtnClick (id) {
    const inputValue = document.querySelector('.message-inputbox').value;
    this.props.onMessageSendBtnClick(inputValue, id);
  }

  render() {
    const {
      currentChat,
      currentMessages,
      isLoadingCurrentChats,
      isCurMessagesLoading
    } = this.props;

    if (isLoadingCurrentChats || isCurMessagesLoading) {
      return 'loading';
    }
    const renderMessages = currentMessages.map((message, i) => {
      return (
        <li className={message.isRecieved ? "received-message" : "sent-message"} key={i}>
          <div className="message-profile-img" style={{backgroundImage: `url(${currentChat.profileUrl})`}} />
          <div className="message-txt">{message.text}</div>
          <div className="message-datetime">{changeTimeFormat(message.datetime)}</div>
        </li>
      );
    });

    return (
      <div className="chat-app">
        <header>
          <Link to="/chatList">
            <button className="back-btn" value="back">뒤로</button>
          </Link>
          <span>{currentChat.name}</span>
        </header>
        <div className="chat-container">
          <div className="chat-container-blank" />
          <ul className="message-list">
            {renderMessages}
          </ul>
          <div className="chat-container-blank" />
          <div className="send-message-box">
              <input
                type="text"
                placeholder="Type Something to send"
                className="message-inputbox"
              />
              <span className="sendbtn-wrap">
                <button className="sendbtn" onClick={() => this.onSendBtnClick(currentChat.id)}>
                  <span>보내기</span>
                </button>
              </span>
          </div>
        </div>
      </div>
    );
  }
}
