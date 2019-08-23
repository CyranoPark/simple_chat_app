import React from 'react';
import { Link } from 'react-router-dom';
import { changeDateFormat } from '../utils/utils';
import '../style/ChatList.css';

export default function ChatList (props) {
  const { chatList } = props;

  const renderChatList = chatList.map((chat, i) => {
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
    <>
      <header>
        <span>CHAT</span>
      </header>
      <div className="list-container">
        <ul className="chat-list">
          {renderChatList}
        </ul>
      </div>
    </>
  );
}
