import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { changeDateFormat } from '../utils/utils';
import '../style/ChatList.css';

export default class ChatList extends Component {
  loadingPage = () => (
    <div>loading...</div>
  );

  render() {
    const renderList = this.props.chatList.map((chat, i) => {
      return (
        <Link key={i} to={`/chatList/${chat.id}`}>
          <li className="chat">
            <div className="chat-img" style={{backgroundImage: `url(${chat.profileUrl})`}} />
            <div className="chat-info">
              <div className="chat-lastupdate">{changeDateFormat(chat.lastUpdate)}</div>
              <div className="chat-name">{chat.name}</div>
              <div className="chat-initialmessage">{chat.initialMessage}</div>
            </div>
          </li>
        </Link>
      );
    });

    return (
      <div className="chat-app">
        <header>
          <span>CHAT</span>
        </header>
        <div className="list-container">
          <ul className="chat-list">
            {this.props.isLoadingChatList ? this.loadingPage() : renderList}
          </ul>
        </div>
      </div>
    );
  }
}
