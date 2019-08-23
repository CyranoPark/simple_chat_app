import entireChatList from './entireChatList';
import entireMessages from './entireMessages';
import * as actionType from '../constants/actionType';

describe('entireChatList reducer', () => {

  it('should handle initial state', () => {
    expect(
      entireChatList(undefined, {})
    ).toEqual(
      {
        chats: [],
        currentChat: {},
        isLoadingInitialChats: true,
        isLoadingCurrentChats : true
      }
    );
  });

  describe('request & recieve initial chat data', () => {
    let state = {};

    beforeEach(() => {
      state = {
        chats: [],
        currentChat: {},
        isLoadingInitialChats: true,
        isLoadingCurrentChats : true
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
        chats: [
          {id : '0', name : 'hanjun'},
          {id : '1', name : 'han'}
        ],
        currentChat: {},
        isLoadingInitialChats: true,
        isLoadingCurrentChats : true
      };
    });

    it('should  be changed to wait for messages data', () => {
      const actionData = {
        type: actionType.REQUEST_CURRENT_CHAT
      };

      expect(
        entireChatList(state, actionData).isLoadingCurrentChats
      ).toEqual(true);
    });

    it('should  be changed "current chats" list and loading status', () => {
      const actionData = {
        type: actionType.RECIEVE_CURRENT_CHAT,
        id: '0'
      };

      expect(
        entireChatList(state, actionData).isLoadingCurrentChats
      ).toEqual(false);
      expect(
        entireChatList(state, actionData).currentChat
      ).toEqual({id : '0', name : 'hanjun'});
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
        currentMessages: [],
        isLoadingMessages: true,
        isLoadingCurMessages : true
      }
    );
  });

  describe('request & recieve initial message data', () => {
    let state = {};

    beforeEach(() => {
      state = {
        messages: {},
        currentMessages: [],
        isLoadingMessages: true,
        isLoadingCurMessages : true
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
        },
        currentMessages: [],
        isLoadingMessages: true,
        isLoadingCurMessages : true
      };
    });

    it('should  be changed to wait for message list data', () => {
      const actionData = {
        type: actionType.REQUEST_CURRENT_MESSAGES
      }

      expect(
        entireMessages(state, actionData).isLoadingCurMessages
      ).toEqual(true);
    });

    it('should  be changed "message" list and loading status', () => {
      const actionData = {
        type: actionType.RECIEVE_CURRENT_MESSAGES,
        id: 0
      };
      expect(
        entireMessages(state, actionData).isLoadingCurMessages
      ).toEqual(false);
      expect(
        entireMessages(state, actionData).currentMessages[0].text
      ).toEqual('시나리오 쓰고 있네');
      expect(
        entireMessages(state, actionData).currentMessages[0].isRecieved
      ).toEqual(true);
    });
  });

  describe('should update message data when user send message', () => {

    it('should  be changed to wait for message list data', () => {
      const actionData = {
        type: actionType.SEND_MESSAGE,
        id: 0,
        text: 'new'
      };

      const state = {
        messages: {
          "allId" : ["0"],
          "0" : {
            "id" : 0,
            "message" : [
              {
                "text" : "wow",
                "datetime" : "2019-08-16T13:40:38.297Z",
                "isRecieved" : true
              }
            ]
          }
        },
        currentMessages: [],
        isLoadingMessages: true,
        isLoadingCurMessages : true
      };

      expect(
        entireMessages(state, actionData)
      ).not.toEqual(state);
      expect(
        entireMessages(state, actionData).currentMessages[0].text
      ).toEqual('wow');
      expect(
        entireMessages(state, actionData).currentMessages[1].text
      ).toEqual('new');
      expect(
        entireMessages(state, actionData).messages[0].message[1].text
      ).toEqual('new');
    });
  });
});
