import { useState } from 'react';

const quotes = [
  { text: '버그는 코드를 작성한 사람의 거울이다.', author: '미상' },
  {
    text: '컴퓨터는 당신이 원하는 것을 하지 않고, 명령한 것을 한다.',
    author: '리처드 파인만',
  },
  {
    text: '완벽한 코드는 존재하지 않는다. 끊임없이 개선할 뿐이다.',
    author: '미상',
  },
  {
    text: '훌륭한 프롬프트가 훌륭한 결과물을 만든다.',
    author: 'AI 크리에이터',
  },
  { text: '작은 컴포넌트 하나가 거대한 시스템의 기초가 된다.', author: '미상' },
  {
    text: '가장 좋은 에러 해결법은 공식 문서를 천천히 읽는 것이다.',
    author: '미상',
  },
];

const RandomQuote = () => {
  // 2. 현재 화면에 크게 보여줄 명언을 관리하는 상태
  // 초기값으로 배열의 첫 번째 명언을 설정한다.
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  // 3. 지금까지 본 명언들의 기록을 저장하는 배열 상태
  // 처음에는 첫 번째 명언만 기록에 넣어둔다.
  const [history, setHistory] = useState([quotes[0]]);

  // 4. 새로운 랜덤 명언을 생성하고 기록에 추가하는 함수
  const generateRandomQuote = () => {
    // 0부터 배열의 길이(6) 미만까지의 무작위 정수를 만든다.
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // 현재 보여지는 명언을 교체한다.
    setCurrentQuote(selectedQuote);

    // 기록 배열을 업데이트한다. (최대 5개까지만 유지)
    // 기존 기록(prevHistory)의 맨 앞에 새 명언을 추가하고, 5개가 넘으면 맨 끝을 자른다.
    setHistory((prevHistory) => {
      const newHistory = [selectedQuote, ...prevHistory];
      if (newHistory.length > 5) {
        newHistory.length = 5; // 배열의 길이를 강제로 5로 제한하여 오래된 기록 삭제
      }
      return newHistory;
    });
  };

  // 5. map 함수 대신 for 문을 사용하여 기록 목록 UI를 생성한다.
  const historyElements = [];
  for (let i = 0; i < history.length; i++) {
    const item = history[i];
    historyElements.push(
      // 반복문으로 생성되는 요소에는 반드시 고유한 key가 필요하다.
      // 여기서는 인덱스(i)를 키로 사용했다.
      <li className='history-item' key={i}>
        <span className='history-text'>"{item.text}"</span>
        <span className='history-author'>- {item.author}</span>
      </li>,
    );
  }

  return (
    <div className='quote-container'>
      {/* 메인 명언 카드 영역 */}
      <div className='quote-card'>
        <div className='quote-content'>
          <p className='quote-text'>"{currentQuote.text}"</p>
          <p className='quote-author'>- {currentQuote.author}</p>
        </div>
        <button className='quote-btn' onClick={generateRandomQuote}>
          새로운 영감 얻기
        </button>
      </div>

      {/* 이전 기록을 보여주는 목록 영역 */}
      <div className='history-board'>
        <h3>최근 열람 기록 (최대 5개)</h3>
        <ul className='history-list'>
          {/* for 문을 통해 만들어진 <li> 배열을 그대로 출력한다. */}
          {historyElements}
        </ul>
      </div>
    </div>
  );
};

export default RandomQuote;

//----------------------------------------------------
// 1. 화면에 출력할 명언 데이터 배열

// import { useState } from 'react';

// // 개발자, 크리에이터의 성장을 돕는 문구들로 구성했다.

// const quotes = [
//   { text: '버그는 코드를 작성한 사람의 거울이다.', author: '미상' },
//   {
//     text: '컴퓨터는 당신이 원하는 것을 하지 않고, 명령한 것을 한다.',
//     author: '리처드 파인만',
//   },
//   {
//     text: '완벽한 코드는 존재하지 않는다. 끊임없이 개선할 뿐이다.',
//     author: '미상',
//   },
//   {
//     text: '훌륭한 프롬프트가 훌륭한 결과물을 만든다.',
//     author: 'AI 크리에이터',
//   },
//   { text: '작은 컴포넌트 하나가 거대한 시스템의 기초가 된다.', author: '미상' },
//   {
//     text: '가장 좋은 에러 해결법은 공식 문서를 천천히 읽는 것이다.',
//     author: '미상',
//   },
// ];

// const RandomQuote = () => {
//   //현재 화면에 보여줄 명언 관리
//   //초기값은 배열의 첫 번째 명언으로 설정한다.
//   const [currentQuote, setCurrenQuote] = useState(quotes[0]);

//   //지금까지 본 명언들의 기록을 저장하는 배열
//   //최초에는 첫번째 명언만 기록에 넣어둔다
//   const [history, setHistory] = useState([quotes[0]]);

//   //새로운 명언을 생성하고 기록에 추가하는 기능 : 0~5 사이의 정수
//   //Math.random() : 0부터 5까지의 정수를 무작위로 만들어서
//   //배열에서 그 위치의 내용을 가져온다
//   //진정한 Random은 시간의 변화를 포함하여야 한다
//   // seed(시간 정보) 를 추가한다
//   const geneRaterandomQuuote = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length); //이건 꼭 필요 외울것
//     const selectedQuote = quotes[randomIndex];

//     //현재 보여지는 명언을 교체한다
//     setCurrenQuote(selectQuote);

//     //기록 배열을 업데이트 한다(최대 5개만 유지하기)
//     //기존 기록(prevHistory)의 맨 앞에 새 명언을 추가, 5개가 넘으면 맨 끝을 자르기
//     setHistory((prevHistory) => {
//       const newHistory = [selectedQuote, ...prevHistory];
//       if (newHistory.length > 5) {
//         newHistory.length = 5;
//       }
//       return newHistory;
//     });
//   };

//   const historyElements = [];

//   for (let i = 0; i < history.length; i++) {
//     const item = history[i];
//     historyElements.push(
//       //박복문에는 생성되는 요소에 반드시 고유한 key가 필요하다
//       // 이 코드에서는 인덱스(i)를 키로 사용한다
//       <li className='history-item' key={i}>
//         <span className='history-text'>{item.text}</span>
//         <span className='history-author'>{item.author}</span>
//       </li>,
//     );
//   }

//   return (
//     <div className='quote-container'>
//       {/* 메인 명언 카드 영역 */}
//       <div className='quote-card'>
//         <div className='quote-content'>
//           <p className='quote-text'>{currentQuote.text}</p>
//           <p className='quote-author'>{currentQuote.author}</p>
//         </div>
//         <button className='quote-btn' onClick={geneRaterandomQuuote}>
//           명언 제조
//         </button>
//       </div>
//       {/* 이전 기록을 보여주는 영역 */}
//       <div className='history-board'>
//         <h3>최근 열람 기록(최대 5개)</h3>
//         <ul className='history-list'>
//           {/* for문을 이영하여 만든 배열을 그대로 출력한다 */}
//           {historyElements}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RandomQuote;
