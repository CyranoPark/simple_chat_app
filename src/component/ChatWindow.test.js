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
});