import { useState } from 'react';

// 1. 화면에 출력할 데이터를 배열 형태로 미리 정의한다.
// 실제 서비스에서는 이 데이터를 서버에서(DB) 받아오게 된다.
const faqData = [
  {
    id: 1,
    question: '리액트란 무엇인가요?',
    answer: '사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리다.',
  },
  {
    id: 2,
    question: 'useState는 왜 쓰나요?',
    answer:
      '컴포넌트 내에서 변경되는 데이터를 관리하고 화면을 갱신하기 위해 사용한다.',
  },
  {
    id: 3,
    question: '컴포넌트란 무엇인가요?',
    answer: 'UI를 구성하는 재사용 가능한 최소 단위를 의미한다.',
  },
  {
    id: 4,
    question: 'JSX는 무엇인가요?',
    answer:
      '자바스크립트 파일 내에서 HTML과 유사한 마크업을 작성할 수 있게 해주는 문법 확장이다.',
  },
];

const Accordion = () => {
  // 2. 현재 열려 있는 항목의 ID 값을 저장하는 상태다. 초기값은 null로 설정하여 모두 닫힌 상태로 시작한다.
  const [activeIndex, setActiveIndex] = useState(null);

  // 3. 사용자가 항목을 클릭했을 때 상태를 변경하는 함수다.
  const toggleAccordion = (id) => {
    // 이미 열려있는 항목을 클릭하면 null을 저장해 닫고, 새로운 항목을 클릭하면 해당 id를 저장해 연다.
    setActiveIndex(activeIndex === id ? null : id);
  };

  // 4. 화면에 그릴 리액트 엘리먼트들을 담을 빈 배열을 선언한다.
  const accordionItems = [];

  // 5. map 함수 대신 가장 기초적인 for 문을 사용하여 데이터를 순회한다.
  for (let i = 0; i < faqData.length; i++) {
    const item = faqData[i];
    // 현재 순회 중인 항목의 id와 상태값(activeIndex)이 같으면 열린 상태(true)로 판별한다.
    const isOpen = activeIndex === item.id;

    // 반복문 안에서 만들어진 JSX 요소를 배열에 차곡차곡 밀어 넣는다(push).
    accordionItems.push(
      // 리액트에서 반복문으로 요소를 생성할 때는 반드시 고유한 key 값을 부여해야 한다.
      <div className='accordion-item' key={item.id}>
        <div
          className={`accordion-title ${isOpen ? 'active' : ''}`}
          onClick={() => toggleAccordion(item.id)}
        >
          <h3>
            Q{i + 1}. {item.question}
          </h3>
          {/* 상태에 따라 화살표의 회전 효과를 주기 위해 클래스를 동적으로 부여한다. */}
          <span className={`icon ${isOpen ? 'rotate' : ''}`}>▼</span>
        </div>

        {/* 조건부 렌더링: isOpen이 true일 때만 답변 영역이 화면에 그려진다. */}
        {isOpen && (
          <div className='accordion-content'>
            <p>{item.answer}</p>
          </div>
        )}
      </div>,
    );
  }

  return (
    <div className='accordion-container'>
      {/* for 문을 통해 차곡차곡 쌓인 JSX 배열을 그대로 출력한다. */}
      {accordionItems}
    </div>
  );
};

export default Accordion;

// import { useState } from 'react';

// const faqData = [
//   {
//     id: 1,
//     q: '리엑트란 무엇인가?(학생)',
//     a: '어렵다, 스트레스 받는걸 즐기면 도전 해볼 수 도 문어 대가리 환영♥',
//   },
//   {
//     id: 2,
//     question: '리액트란 무엇인가요?(강사)',
//     answer: '사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리다.',
//   },
//   {
//     id: 3,
//     question: 'useState는 왜 쓰나요?',
//     answer:
//       '컴포넌트 내에서 변경되는 데이터를 관리하고 화면을 갱신하기 위해 사용한다.',
//   },
//   {
//     id: 4,
//     question: '컴포넌트란 무엇인가요?',
//     answer: 'UI를 구성하는 재사용 가능한 최소 단위를 의미한다.',
//   },
//   {
//     id: 5,
//     question: 'JSX는 무엇인가요?',
//     answer:
//       '자바스크립트 파일 내에서 HTML과 유사한 마크업을 작성할 수 있게 해주는 문법 확장이다.',
//   },
//   { id: 6, question: '졸릴때 대처법', answer: '자면 됩니다' },
//   { id: 7, question: '간식 몰래 먹는법', answer: '안들키면 된다' },
//   { id: 8, question: '집가고 싶을때는?', answer: '나도 가고싶다.' },
// ];

// const Accordion = () => {
//   //현재 열려있는 항목의 ID값을 저장한다. 초기 상태에는 null.모든 내용이 접힌 상태를 의미한다
//   const [activeIndex, setActiveIndex] = useState(null);
//   //사용자가 항목을 클릭하면 상태를 변경시키자
//   const toggleAccordion = (id) => {
//     //이미 열려있다면 null로 설정하여 닫고, 새로운 항목을 클릭하면 해당 id를 인지한다
//     setActiveIndex(activeIndex === id ? null : id);
//   };
//   //화면에 표시할 요소들을 담을 배열 선언
//   const accordionItems = [];

//   //forㅁ누을 이용하여 데이터를 순환하면서 작업을 진행한다
//   for (let i = 0; i < faqData.length; i++) {
//     const item = faqData[i];

//     //현재 저장된 항목의 id와 상태값을 비교하여 같으면 열린 상태
//     const isOpen = activeIndex === item.id;

//     accordionItems.push(
//       <div className='accordion-item' key={item.id}>
//         <div
//           className={`accordion-titlw ${isOpen ? 'active' : ''}`}
//           onClick={() => toggleAccordion(item.id)}
//         >
//           <h3>
//             Q{i + i}.{item.questiom}
//           </h3>
//           <span className={`icon${isOpen ? 'rotate' : ''}`}>▼</span>
//         </div>
//         // 조건부 렌더링 : isOpen이 true일 때만 답변 영영기 화면에 그려진다
//         {isOpen && (
//           <div className='accordion'>
//             <p>{item.answer}</p>
//           </div>
//         )}
//       </div>,
//     );
//   }

//   return (
//     <div className='accordion-container'>
//       {/* for문을 이용하여 처음부터 마지막까지 순서대로 보여준다 */}
//       {accordionItems}
//     </div>
//   );
// };

// export default Accordion;
