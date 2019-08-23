import React from 'react';
import { shallow } from 'enzyme';
import ChatList from './ChatList';

describe('<ChatList /> Component', () => {
  let chatList = [];

  beforeEach(() => {
    chatList = [{
      id: 6,
      initialMessage: "dd",
      lastUpdate: "2019-08-22T10:49:16.990Z",
      messages: 6,
      name: "고광렬",
      profileUrl: "http://mblogthumb4.phinf.naver.net/20160802_127/park032673_14701134913378kcYa_PNG/%C5%B8%C2%A57.png?type=w800"
    }];
  });

  it('should be rendered <li class="chat"> as long as the length of the chatlist which is props.', () => {
    let wrapper = shallow(<ChatList chatList={chatList} />);
    expect(wrapper.find('.chat').length).toBe(1);

    chatList.push({
      id: 1,
      initialMessage: "패 건들지마! 손모가지 날아가붕께",
      lastUpdate: "2019-08-19T20:40:38.297Z",
      messages: 1,
      name: "아귀",
      profileUrl: "http://imgpark.donga.com/mbs/fileUpload/201401/52c6061711512774c1db.JPG"
    });

    wrapper = shallow(<ChatList chatList={chatList} />);
    expect(wrapper.find('.chat').length).toBe(2);
  });

  it('should be rendered with the contents of the props reflected.', () => {
    let wrapper = shallow(<ChatList chatList={chatList} />);

    expect(wrapper.find('.chat-name').text()).toBe(chatList[0].name);
    expect(wrapper.find('.chat-initialmessage').text()).toBe(chatList[0].initialMessage);
  });
});
