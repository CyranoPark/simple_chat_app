import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { changeDateFormat } from '../utils/utils';
import '../style/ChatWindow.css';

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.chatWindowRef = React.createRef();
    this.userProfileImg = 'https://img.icons8.com/carbon-copy/2x/user.png';
    this.chatWindowHeight = 530;
  }

  componentDidMount() {
    this.props.onChatWindowLoad(this.props.match.params.chatId);
  }

  componentDidUpdate() {
    if (this.chatWindowRef.current) {
      if (this.chatWindowHeight < this.chatWindowRef.current.scrollHeight) {
        this.chatWindowRef.current.scrollTop = this.chatWindowRef.current.scrollHeight;
      }
    }
  }

  handleSendBtnClick(id) {
    const {
      currentMessages,
      messageBoxValue,
      onInputBoxChange,
      onMessageSendBtnClick
    } = this.props;

    if (messageBoxValue === '') {
      return;
    }

    onMessageSendBtnClick(id, messageBoxValue, currentMessages);
    onInputBoxChange('');
  }

  renderEmptyMessages() {
    return (
      <div className="empty-message-modal">
        메시지를 불러올 수 없습니다.
        <Link to="/chatList">
          <button className="back-btn" value="back">뒤로</button>
        </Link>
      </div>
    );
  }

  renderMessages(messages) {
    const { currentChat, newMessageDatetime, isLoadingCurrentChat } = this.props;
    return messages.map((message, i) => {
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
            <span>{message.text}</span>
            <div className="message-datetime">
              {
                isLoadingCurrentChat && message.datetime === newMessageDatetime ?
                'loading'
                : changeDateFormat(message.datetime)
              }
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    const {
      currentChat,
      currentMessages,
      messageBoxValue,
      isLoadingCurrentChat,
      isFetchCurDataError,
      onInputBoxChange
    } = this.props;

    return (
      <>
        <header>
          <Link to="/chatList">
            <button className="back-btn" value="back">뒤로</button>
          </Link>
          <span>{!isLoadingCurrentChat && currentChat.name}</span>
        </header>
        <div className="chat-container">
          <div className="chat-container-blank" />
          <ul className="message-list" ref={this.chatWindowRef}>
            {isFetchCurDataError ? this.renderEmptyMessages() : this.renderMessages(currentMessages)}
          </ul>
          <div className="chat-container-blank" />
          <div className="send-message-box">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSendBtnClick(currentChat.id)
              }}
              autoComplete="off"
            >
              <input
                type="text"
                placeholder="Type Something to send"
                className="message-inputbox"
                name="message"
                value={messageBoxValue}
                onChange={(e) => {onInputBoxChange(e.target.value)}}
                autoFocus
              />
              <span className="sendbtn-wrap">
                <input type="submit" className="sendbtn" value="보내기" />
              </span>
            </form>
          </div>
        </div>
      </>
    );
  }
}
