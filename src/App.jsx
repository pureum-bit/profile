//입력 상태를 실시간으로 인지하자-----------------------------------------------------------------

import InpuMirror from './InpuMirror';
import './InpuMirror.css';

const App = () => {
  return (
    <>
      <InpuMirror />
    </>
  );
};

export default App;

//명언 생성----------------------------------------------------------

// import RandomQuote from './RandomQuote';
// import './RandomQuote.css';

// const App = () => {
//   return <RandomQuote />;
// };

// export default App;

//Qna 제미나이(AI)--------------------------------------------------

// import QuoteGenerator from './QuoteGenerator';
// import './QuoteGenerator.css';

// const App = () => {
//   return <QuoteGenerator />;
// };

// export default App;

//Qna----------------------------------------------------------

// import Accordion from './Accordion';
// import './Accordion.css';

// const App = () => {
//   return <Accordion />;
// };

// export default App;

//글자 수 제한하기--------------------------------------------------------

// import CharacterCounter from './CharacterCounter';
// import './App.css';

// const App = () => {
//   return (
//     <div>
//       <CharacterCounter />
//     </div>
//   );
// };

// export default App;

//목록을 저장하는 목록------------------------------------------------------------

// import React from 'react';
// import TodoList from './TodoList';
// import './App.css';

// const App = () => {
//   return (
//     <>
//       <TodoList />
//     </>
//   );
// };

// export default App;

//다크모드--------------------------------------------------

// import DarkModeToggie from './DarkModeToggie';
// import './App.css';

// const App = () => {
//   return (
//     <div>
//       <DarkModeToggie />
//     </div>
//   );
// };

// export default App;

//증가감소-----------------------------------------------------------------

// import Counter from './Counter';
// import './App.css';

// const App = () => {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>카운터</h1>
//       </header>
//       <main>
//         <Counter />
//       </main>
//     </div>
//   );
// };

// export default App;

// //최종 결과물-----------------------------------------------------------------

// import { useState } from 'react';

// import './App.css'; // 작성한 CSS 파일을 불러온다.

// const App = () => {
//   // 메시지 상태 관리

//   const [message, setMessage] = useState('');

//   // 입장 버튼 클릭 핸들러

//   const onClickEnter = () => {
//     setMessage('안녕하세요');
//   };

//   // 퇴장 버튼 클릭 핸들러

//   const onClickLeave = () => {
//     setMessage('안녕히 가세요');
//   };

//   /**

// * 삼항 연산자를 이용한 클래스명 결정 로직

// * 1. message가 '안녕하세요'면 'red-text'

// * 2. '안녕히 가세요'면 'green-text'

// * 3. 그 외엔 'black-text'를 반환한다.

// */

//   const textClass =
//     message === '안녕하세요'
//       ? 'red-text'
//       : message === '안녕히 가세요'
//         ? 'green-text'
//         : 'black-text';

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* 기능 버튼 영역 */}

//       <button
//         className='btn'
//         style={{ color: 'black', border: '1px solid #ccc' }}
//         onClick={onClickEnter}
//       >
//         입장
//       </button>

//       <button
//         className='btn'
//         style={{ color: 'black', border: '1px solid #ccc' }}
//         onClick={onClickLeave}
//       >
//         퇴장
//       </button>

//       {/*

// className에 삼항 연산자 결과를 대입한다.

// 기본 클래스인 'message-text'와 조건부 클래스인 textClass를 합쳐서 적용한다.

// */}

//       <h1 className={`message-text ${textClass}`}>
//         {message || '버튼을 클릭해 주세요'}
//       </h1>

//       <hr />

//       {/* 색상 전용 버튼 영역 */}

//       <button className='btn btn-red' onClick={() => setMessage('안녕하세요')}>
//         빨간색 적용
//       </button>

//       <button
//         className='btn btn-green'
//         onClick={() => setMessage('안녕히 가세요')}
//       >
//         초록색 적용
//       </button>
//     </div>
//   );
// };

// export default App;

// // 3. 주요 설명 및 차이점

// // className 사용: HTML의 class 대신 리액트에서는 className을 사용한다.
// // 백틱(`)을 이용한 클래스 병합: className={message-text ${textClass}} 부분은 여러 개의 클래스를 동시에 적용하기 위한 문법이다. 공통 디자인인 message-text는 유지하면서, 색상만 textClass 변수 값에 따라 바뀐다.
// // 유지보수의 편의성: 인라인 스타일(style={{...}})을 사용하면 코드가 길어질수록 가독성이 떨어지지만, CSS 파일을 분리하면 디자인 수정이 훨씬 간편하고 성능상으로도 유리하다.
// // 논리적 분리: JavaScript 영역에서는 "어떤 조건에서 어떤 클래스를 쓸 것인가"만 결정하고, 구체적인 색상 값(Red, Green 등)은 CSS에서 관리하므로 역할 분담이 명확해진다.

// ''===''?'': 를 이용한 삼학연산자----------------------------------------------------------------------

// import { useState } from 'react';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [msgColor, setMsgColor] = useState('#000');
//   const [color1, setColor1] = useState('#000');
//   const [color2, setColor2] = useState('#000');
//   const onClickEnter = () => {
//     setMessage('안녕하세요');
//     setMsgColor('#f84e95');
//   };
//   const onClickLeave = () => {
//     setMessage('안녕히가세요');
//     setMsgColor('#3dd8a4');
//   };
//   const onClickColor1 = () => {
//     setColor1('#f84e95');
//     setColor2('');
//   };
//   const onClickColor2 = () => {
//     setColor2('#3dd8a4');
//     setColor1('');
//   };

//   return (
//     <>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1
//         style={{
//           color:
//             message === '안녕하세요'
//               ? '#f84e95'
//               : message === '안녕히가세요'
//                 ? '#27e2aa'
//                 : '#000',
//         }}
//       >
//         {message}
//       </h1>
//       <br />
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-around',
//           width: '100%',
//           margin: '0, auto',
//           padding: '10px, 20px',
//         }}
//       >
//         <button onClick={onClickColor1} style={{ backgroundColor: color1 }}>
//           핑크색
//         </button>
//         <button onClick={onClickColor2} style={{ backgroundColor: color2 }}>
//           민트색
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

//삼학연산자 없이한------------------------------------------------------------------------

// import { useState } from 'react';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [msgColor, setMsgColor] = useState('#000');
//   const [color1, setColor1] = useState('#000');
//   const [color2, setColor2] = useState('#000');
//   const onClickEnter = () => {
//     setMessage('안녕하세요');
//     setMsgColor('#f84e95');
//   };
//   const onClickLeave = () => {
//     setMessage('안녕히가세요');
//     setMsgColor('#3dd8a4');
//   };
//   const onClickColor1 = () => {
//     setColor1('#f84e95');
//     setColor2('');
//   };
//   const onClickColor2 = () => {
//     setColor2('#3dd8a4');
//     setColor1('');
//   };

//   return (
//     <>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1 style={{ color: msgColor }}>{message}</h1>
//       <br />
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-around',
//           width: '100%',
//           margin: '0, auto',
//           padding: '10px, 20px',
//         }}
//       >
//         <button onClick={onClickColor1} style={{ backgroundColor: color1 }}>
//           핑크색
//         </button>
//         <button onClick={onClickColor2} style={{ backgroundColor: color2 }}>
//           민트색
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

// '||'이용한 삼학연산자-----------------------------------------------------------------

// //상태란 컴포넌트 내부에서 변경될 수 있다.
// //let

// import { useState } from 'react';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [color1, setColor1] = useState('blck');
//   const [color2, setColor2] = useState('blck');
//   const [color3, setColor3] = useState('');
//   const [color4, setColor4] = useState('');

//   const onClickEnter = () => {
//     setMessage('안녕하세요');
//     setColor3('red');
//     setColor4('');
//   };
//   const onClickLeave = () => {
//     setMessage('안녕히 가세요');
//     setColor3('');
//     setColor4('green');
//   };
//   const onClickColor1 = () => {setColor1('red'), setColor2('')};
//   const onClickColor2 = () => {setColor2('green')setColor1('')};

//   return (
//     <>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1 style={{ color: color3||color4 }}>{message}</h1>
//       <button
//         onClick={onClickColor1}
//         style={{ backgroundColor: color1, color: 'white' }}
//       >
//         빨간색
//       </button>
//       <button
//         onClick={onClickColor2}
//         style={{ backgroundColor: color2, color: 'white' }}
//       >
//         초록색
//       </button>
//     </>
//   );
// };

// export default App;

// //상태란 컴포넌트 내부에서 변경될 수 있다.
// //let
