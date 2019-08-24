import * as actionType from '../constants/actionType';
import entireChatList from './entireChatList';
import currentChat from './currentChat';

describe('ChatList reducer', () => {

  it('should handle initial state', () => {
    expect(
      entireChatList(undefined, {})
    ).toEqual(
      {
        chats: [],
        isLoadingInitialChats: true
      }
    );
  });

  describe('request & recieve initial chat data', () => {
    let state = {};

    beforeEach(() => {
      state = {
        chats: [],
        isLoadingInitialChats: true
      };
    });

    it('should  be changed to wait for chat list data', () => {
      const actionData = {
        type: actionType.REQUEST_INIT_CHAT_LIST
      }

      expect(
        entireChatList(state, actionData).isLoadingInitialChats
      ).toEqual(true);
    });

    it('should  be changed "chats" list and loading status', () => {
      const actionData = {
        type: actionType.RECIEVE_INIT_CHAT_LIST,
        chats: [
          {id : 0, name : 'hanjun'},
          {id : 1, name : 'han'}
        ]
      };
      expect(
        entireChatList(state, actionData).isLoadingInitialChats
      ).toEqual(false);
      expect(
        entireChatList(state, actionData).chats[0]
      ).toEqual({id : 0, name : 'hanjun'});
      expect(
        entireChatList(state, actionData).chats[1].id
      ).toEqual(1);
    });
  });


  describe('request & recieve current chatlist data', () => {
    let state = {};

    beforeEach(() => {
      state = {
        currentChatId: null,
        isLoadingCurrentChats : true
      };
    });

    it('should  be changed to wait for current chat data', () => {
      const actionData = {
        type: actionType.REQUEST_CURRENT_CHAT
      };

      expect(
        currentChat(state, actionData).isLoadingCurrentChats
      ).toEqual(true);
    });

    it('should  be changed "current chats" id and loading status', () => {
      const actionData = {
        type: actionType.RECIEVE_CURRENT_CHAT,
        id: 0
      };

      expect(
        currentChat(state, actionData).isLoadingCurrentChats
      ).toEqual(false);
      expect(
        currentChat(state, actionData).currentChatId
      ).toEqual(0);
    });
  });
});
