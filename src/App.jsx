import { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [msgColor, setMsgColor] = useState('');
  const [color1, setColor1] = useState('blck');
  const [color2, setColor2] = useState('blck');

  const onClickEnter = () => {
    setMessage('안녕하세요');
    setMsgColor('red');
  };
  const onClickLeave = () => {
    setMessage('안녕히 가세요');
    setMsgColor('green');
  };
  const onClickColor1 = () => setColor1('red');
  const onClickColor2 = () => setColor2('green');

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: msgColor }}>{message}</h1>
      <button
        onClick={onClickColor1}
        style={{ backgroundColor: color1, color: 'white' }}
      >
        빨간색
      </button>
      <button
        onClick={onClickColor2}
        style={{ backgroundColor: color2, color: 'white' }}
      >
        초록색
      </button>
    </>
  );
};

export default App;

//상태란 컴포넌트 내부에서 변경될 수 있다.
//let
