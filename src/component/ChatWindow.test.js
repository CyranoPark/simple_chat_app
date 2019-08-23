import React from 'react';
import { shallow } from 'enzyme';
import ChatWindow from './ChatWindow';

describe('<ChatWindow /> Component', () => {
  let isLoadingCurMessages = false;
  let isLoadingCurrentChats = false;
  let onChatWindowLoad = jest.fn();
  let onMessageSendBtnClick = null;
  let currentMessages = [{
    datetime: "2019-08-20T13:40:38.297Z",
    isRecieved: true,
    text: "물아일체의 경지!"
  }];
  let currentChat = {
    id: 6,
    initialMessage: "dd",
    lastUpdate: "2019-08-22T10:49:16.990Z",
    messages: 6,
    name: "고광렬",
    profileUrl: "http://mblogthumb4.phinf.naver.net/20160802_127/park032673_14701134913378kcYa_PNG/%C5%B8%C2%A57.png?type=w800"
  };

  let wrapper = shallow(
    <ChatWindow
      currentChat={currentChat}
      currentMessages={currentMessages}
      isLoadingCurMessages={isLoadingCurMessages}
      isLoadingCurrentChats={isLoadingCurrentChats}
      onChatWindowLoad={onChatWindowLoad}
      onMessageSendBtnClick={onMessageSendBtnClick}
      match={{params: {chatId: 1}, isExact: true, path: "", url: ""}}
    />
  );

  beforeEach(() => {
    wrapper.setProps({
      currentMessages : [{
        datetime: "2019-08-20T13:40:38.297Z",
        isRecieved: true,
        text: "물아일체의 경지!"
      }]
    });
  });

  describe('rendering test', () => {
    it('should render container class & children.', () => {
      expect(wrapper.find('.chat-container').length).toBe(1);
      expect(wrapper.find('.chat-container-blank').length).toBe(2);
      expect(wrapper.find('.send-message-box').length).toBe(1);
      expect(wrapper.find('.message-inputbox').length).toBe(1);
    });

    it('should render one message if the number of message list content is one.', () => {
      expect(wrapper.find('.message-list > li').length).toBe(1);
    });

    it('should render message according to the message list number.', () => {
      wrapper.setProps({
        currentMessages : [...currentMessages, {
          datetime: "2019-08-20T13:40:38.297Z",
          isRecieved: true,
          text: "wow"
        }]
      });

      expect(wrapper.find('.message-list > li').length).toBe(2);
    });

    it('should render message list content class name belong to isRecieved property.', () => {
      expect(wrapper.find('.sent-message').length).toBe(0);

      wrapper.setProps({
        currentMessages : [...currentMessages, {
          datetime: "2019-08-20T13:40:38.297Z",
          isRecieved: false,
          text: "wow"
        }]
      });

      expect(wrapper.find('.sent-message').length).toBe(1);
    });

    it('should render message list text content class name belong to props.', () => {
      expect(wrapper.find('.message-txt > span').text()).toBe('물아일체의 경지!');

      wrapper.setProps({
        currentMessages : [{
          datetime: "2019-08-20T13:40:38.297Z",
          isRecieved: false,
          text: "wow"
        }]
      });

      expect(wrapper.find('.message-txt > span').text()).toBe('wow');
    });

    it('should render EmptyMessages if currentmessages length is 0', () => {
      expect(wrapper.find('.empty-message-modal').length).toBe(0);

      wrapper.setProps({
        currentMessages : []
      });

      expect(wrapper.find('.empty-message-modal').length).toBe(1);
    });
  });

  describe('simulate test', () => {
    it('should called onChatWindowLoad when this component did mount', () => {
      expect(onChatWindowLoad).toHaveBeenCalled();
    });


    it('should called onMessageSendBtnClick when send message button clicked', () => {
      onMessageSendBtnClick = jest.fn();
      wrapper.setProps({
        onMessageSendBtnClick : onMessageSendBtnClick
      });
      expect(onMessageSendBtnClick).not.toHaveBeenCalled();

      wrapper.instance().onSendBtnClick({value : 0});
      expect(onMessageSendBtnClick).toHaveBeenCalled();
    });

    it('should not called onMessageSendBtnClick when send message value is empty string', () => {
      onMessageSendBtnClick = jest.fn();
      wrapper.setProps({
        onMessageSendBtnClick : onMessageSendBtnClick
      });

      wrapper.instance().onSendBtnClick({value : ''});
      expect(onMessageSendBtnClick).not.toHaveBeenCalled();
    });
  });
});
