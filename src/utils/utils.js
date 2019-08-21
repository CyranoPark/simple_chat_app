export function filterListById (list, id) {
  return list.find(el => {
    return Number(id) === el.id;
  });
}

export function changeDateFormat(date) {
  const targetDate = new Date(date);
  const today = new Date();
  const periodFromNow = Math.floor((today - targetDate) / 60000);

  if (periodFromNow < 1440) {
    if(periodFromNow / 60 > 1){
      return `${Math.floor(periodFromNow / 60)}시간 전`;
    } else {
      return `${periodFromNow}분 전`;
    }
  }

  return `${targetDate.getMonth() + 1}.${targetDate.getDate()}`;
}

export function changeTimeFormat(date) {
  const targetDate = new Date(date);
  const today = new Date();
  const periodFromNow = Math.floor((today - targetDate) / 60000);

  if (periodFromNow < targetDate.getHours() * 60) {
    return `${targetDate.getHours()}:${targetDate.getMinutes()}`;
  }

  return `${targetDate.getMonth() + 1}.${targetDate.getDate()}`;
}

export function addInitialMessageToChatList (chatList, messages) {
  return chatList.map(chat => {
    const messageHistory = filterListById(messages, chat.id).message;
    return Object.assign(chat, {
      initialMessage: messageHistory[messageHistory.length - 1].text,
      lastUpdate: messageHistory[messageHistory.length - 1].datetime
    });
  });
}

export function Message (txt) {
  const message = {};
  message.text = txt;
  message.datetime = new Date().toISOString();
  message.isRecieved = false;

  return message;
}
