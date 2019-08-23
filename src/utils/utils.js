export function filterChatListById (chatList, id) {
  return chatList.find((chat) => {
    return chat.id + '' === id;
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

  return `${displayDigit(targetDate.getMonth() + 1, 2)}/${displayDigit(targetDate.getDate(), 2)}`;
}

export function changeTimeFormat(date) {
  const targetDate = new Date(date);
  const today = new Date();
  const periodFromNow = Math.floor((today - targetDate) / 60000);

  if (periodFromNow < targetDate.getHours() * 60) {
    return `${displayDigit(targetDate.getHours(), 2)}:${displayDigit(targetDate.getMinutes(), 2)}`;
  }

  return `${displayDigit(targetDate.getMonth() + 1, 2)}/${displayDigit(targetDate.getDate(), 2)}`;
}

export function addInitialMessageToChatList (chatList, messages) {
  return chatList.map(chat => {
    const messageHistory = messages[chat.messages + ''].message

    return Object.assign(chat, {
      initialMessage: messageHistory[messageHistory.length - 1].text,
      lastUpdate: messageHistory[messageHistory.length - 1].datetime
    });
  });
}

export function sortObjectsInArrayByDate (array, dateKey) {
  return array.sort((a, b) => {
    return new Date(b[dateKey]) - new Date(a[dateKey]);
  });
}

export function Message (txt) {
  const message = {};
  message.text = txt;
  message.datetime = new Date().toISOString();
  message.isRecieved = false;

  return message;
}

function displayDigit (number, digit) {
  number = number + '';

  if (number.length >= digit) {
    return number;
  }

  return new Array(digit - number.length + 1).join('0') + number;
}
