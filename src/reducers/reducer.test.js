import * as actionType from '../constants/actionType';
import entireChatList from './entireChatList';
import entireMessages from './entireMessages';
import currentChat from './currentChat';
import currentMessages from './currentMessages';

describe('entireChatList reducer', () => {

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

describe('entireMessages reducer', () => {

  it('should handle initial state', () => {
    expect(
      entireMessages(undefined, {})
    ).toEqual(
      {
        messages: {},
        isLoadingMessages: true
      }
    );
  });

  describe('request & recieve initial message data', () => {
    let state = {};

    beforeEach(() => {
      state = {
        messages: {},
        isLoadingMessages: true
      };
    });

    it('should  be changed to wait for message list data', () => {
      const actionData = {
        type: actionType.REQUEST_INIT_MESSAGES
      }

      expect(
        entireMessages(state, actionData).isLoadingMessages
      ).toEqual(true);
    });

    it('should  be changed "message" list and loading status', () => {
      const actionData = {
        type: actionType.RECIEVE_INIT_MESSAGES,
        messages: {
          "allId" : ["0"],
          "0" : {
            "id" : 0,
            "message" : [
              {
                "text" : "시나리오 쓰고 있네",
                "datetime" : "2019-08-16T13:40:38.297Z",
                "isRecieved" : true
              }
            ]
          }
        }
      };

      expect(
        entireMessages(state, actionData).isLoadingMessages
      ).toEqual(false);
      expect(
        entireMessages(state, actionData).messages.hasOwnProperty('allId')
      ).toEqual(true);
      expect(
        entireMessages(state, actionData).messages[0].id
      ).toEqual(0);
    });
  });

  describe('request & recieve current message data', () => {
    let state = {};

    beforeEach(() => {
      state = {
        currentMessageId: null,
        newMessages: {},
        isLoadingCurMessages : true
      };
    });

    it('should  be changed to wait for message list data', () => {
      const actionData = {
        type: actionType.REQUEST_CURRENT_MESSAGES
      }

      expect(
        currentMessages(state, actionData).isLoadingCurMessages
      ).toEqual(true);
    });

    it('should  be changed "message" list and loading status', () => {
      const actionData = {
        type: actionType.RECIEVE_CURRENT_MESSAGES,
        id: 0
      };
      expect(
        currentMessages(state, actionData).isLoadingCurMessages
      ).toEqual(false);
      expect(
        currentMessages(state, actionData).currentMessageId
      ).toEqual(0);
    });
  });

  describe('should update message data when user send message', () => {
    const state = {
      currentMessageId: null,
      newMessages: {},
      isLoadingCurMessages : true
    };

    it('should  be saved message', () => {
      const actionData = {
        type: actionType.SEND_MESSAGE,
        text: 'new'
      };

      expect(
        currentMessages(state, actionData)
      ).not.toEqual(state);
      expect(
        currentMessages(state, actionData).newMessages.text
      ).toEqual('new');
    });

    it('should be empty new message when complete send message', () => {
      const actionData = {
        type: actionType.COMPLETE_SEND_MESSAGE
      };


      expect(
        currentMessages(state, actionData).newMessages
      ).toEqual({});
    });
  });
});
