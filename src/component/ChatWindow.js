import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { changeTimeFormat } from '../utils/utils';
import '../style/ChatWindow.css';

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.inputTxtRef = React.createRef();
    this.chatWindowRef = React.createRef();
    this.userProfileImg = 'https://img.icons8.com/carbon-copy/2x/user.png';
  }

  componentDidMount() {
    this.props.onChatWindowLoad(this.props.match.params.chatId);
  }

  componentDidUpdate() {
    this.chatWindowRef.current.scrollTop = this.chatWindowRef.current.scrollHeight;
  }

  onSendBtnClick(id) {
    const inputValue = document.querySelector('.message-inputbox').value;
    const inputTxtBox = this.inputTxtRef.current;

    if (inputValue === '') {
      return;
    }
    this.props.onMessageSendBtnClick(inputValue, id);
    inputTxtBox.value = '';
  }

  onInputBoxKeyDown(event, id) {
    if (event.key === 'Enter') {
      this.onSendBtnClick(id);
    }
  }

  renderEmptyMessages() {
    return (
      <div className="empty-message-modal">
        메시지를 불러올 수 없습니다.
      </div>
    );
  }

  renderMessages() {
    const { currentChat, currentMessages } = this.props;

    return currentMessages.map((message, i) => {
      return (
        <li className={message.isRecieved ? "received-message" : "sent-message"} key={i}>
          <div
            className="message-profile-img"
            style={message.isRecieved ?
              {backgroundImage: `url(${currentChat.profileUrl})`}
              : {backgroundImage: `url(${this.userProfileImg})`}
            }
          />
          <div className="message-txt">
            {message.text}
            <div className="message-datetime">{changeTimeFormat(message.datetime)}</div>
          </div>
        </li>
      );
    });
  }

  render() {
    const {
      currentChat,
      isLoadingCurrentChats,
      isLoadingCurMessages,
      currentMessages
    } = this.props;

    if (isLoadingCurrentChats || isLoadingCurMessages) {
      return null;
    }

    return (
      <>
        <header>
          <Link to="/chatList">
            <button className="back-btn" value="back">뒤로</button>
          </Link>
          <span>{currentChat.name}</span>
        </header>
        <div className="chat-container">
          <div className="chat-container-blank" />
          <ul className="message-list" ref={this.chatWindowRef}>
            {currentMessages.length ? this.renderMessages() : this.renderEmptyMessages()}
          </ul>
          <div className="chat-container-blank" />
          <div className="send-message-box">
              <input
                type="text"
                placeholder="Type Something to send"
                className="message-inputbox"
                ref={this.inputTxtRef}
                onKeyDown={(e) => this.onInputBoxKeyDown(e, currentChat.id)}
              />
              <span className="sendbtn-wrap">
                <button className="sendbtn" onClick={() => this.onSendBtnClick(currentChat.id)}>
                  <span>보내기</span>
                </button>
              </span>
          </div>
        </div>
      </>
    );
  }
}
