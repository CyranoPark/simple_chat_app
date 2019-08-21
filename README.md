# I'm lovely

React/Redux/React Router를 기반으로 가짜 채팅 어플리케이션을 만들어 보는 과제입니다.

## Setup

Install dependencies

```sh
$ yarn install (or npm install)
```

## Development

```sh
$ yarn start (or npm start)
# visit http://localhost:3000
```

- HTML 수정: `/public/index.html`를 수정하시면 됩니다.
- JS 수정: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업하시면 됩니다.
- CSS 수정: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업하시면 됩니다.

## How to set up Redux

- [Redux Example](https://redux.js.org/basics/example)

## Don't forget

Container Component와 Presentational Component의 차이점에 대해 분명하게 이해하고 적용해보시기 바랍니다.

https://redux.js.org/basics/usage-with-react#presentational-and-container-components

## Redux Example

아래 링크에 들어가시면 Redux를 이용한 샘플 코드를 찾으실 수 있습니다. 디렉토리의 구조나 패턴을 잘 살펴보시고 비슷한 방식으로 구현해보세요.

https://github.com/reduxjs/redux/tree/master/examples/shopping-cart

**Container Component를 과도하게 많이 만들어 남용하지 마세요.**

## TODO

간단한 요구사항이 주어졌을 때 얼마나 상세한 부분까지 신경써서 구현하는지 확인하는 과제입니다.

간단한 채팅 웹 서비스를 만들면 됩니다.
아래와 같은 모습의 두 페이지를 웹 어플리케이션으로 만들어주세요.

1. 목록

![목록](list.png)

2. 채팅

![채팅](chat.png)

* 기능
    * 기본 채팅방 목록은 임의로 정의합니다. 새로운 채팅방을 만드는 기능은 없어도 됩니다.
    * 채팅방 목록에서 채팅을 하고자 하는 사람을 선택하면, 해당 사람과 채팅할 수 있는 화면이 표시됩니다.
    * 채팅 화면에서 메시지를 입력하면 채팅화면에 표시됩니다. 초기 메시지는 임의로 구성하면 됩니다.
    * 채팅 화면에서 다시 채팅방 목록으로 돌아갈 수 있어야 합니다.
    * 여기에 명시되지 않은 부분은 일반적인 채팅 어플리케이션 기준으로 구현하시면 됩니다. (안 읽은 사람 수 같은 고급 기능을 구현할 필요는 없습니다)
* 인물 사진이 필요한 경우 인터넷에서 자유롭게 구글링하여 사용해주세요.
* 서버 구현은 필요하지 않습니다. 서버에 데이터를 요청해 받아오는 가상의 메소드를 만들어 사용해주세요. ([참고](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart/src/api))
* GUI는 큰틀이 변하지 않는 한에서 변화를 주어도 괜찮습니다.
* React/Redux/React Router을 사용해 SPA(Single Page Application)로 만들어주세요.
* 화면전환 등 다양한 효과들은 마음껏 보여주셔도 됩니다.

### Things to remember

* 서버에서 전달받는 JSON 데이터를 작성하시기 전에 반드시 Normalize(정규화)에 대한 글을 읽어보세요.
  - [자료 정규화 Wikipedia](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%A0%95%EA%B7%9C%ED%99%94)
  - [Redux 상태 정규화하기](https://deminoth.github.io/redux/recipes/reducers/NormalizingStateShape.html)
* 서버에서 전달받는 JSON 데이터를 작성하실 때는 각각의 Entity에 대한 JSON을 별개로 만드시기 바랍니다. 예) Chatroom, Messages, Users, etc
* JSON 데이터에 입력하는 시간 정보는 [ISO 형식](https://ko.wikipedia.org/wiki/ISO_8601)을 이용하세요.

### Advanced

* [Test Code 작성하기](https://gitlab.com/vanilla-coding/bootcamp/wiki/blob/master/tdd/test.md) (Reducer와 Presentational Component 1-2개씩 작성해보시기 바랍니다.)
* [Firebase Database](https://firebase.google.com/docs/database/web/start)(페이지 우측 상단 Languages에서 한국어 변환 가능)를 이용하여 실제 채팅 데이터 연동하기 (가짜 API가 아닌 Firebase 데이터베이스를 이용하여 지속 가능한 채팅 어플리케이션을 구축하도록 합니다.)
* 브라우저에 script tag를 이용하지 마시고 [Firebase NPM Package](https://www.npmjs.com/package/firebase)를 이용하세요.
