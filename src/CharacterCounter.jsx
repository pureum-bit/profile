//진척도를 막대그래프로 표시하기--------------------------
import { useState } from 'react';

const CharacterCounter = () => {
  // 1. 입력된 텍스트를 저장하는 상태

  const [text, setText] = useState('');

  // 2. 최대 허용 글자 수 설정 (상수로 관리)

  const MAX_LENGTH = 50;

  // 3. 입력창의 내용이 바뀔 때마다 실행되는 함수

  const handleChange = (e) => {
    // 사용자가 타이핑한 전체 문자열을 상태에 저장한다.

    setText(e.target.value);
  };

  // 4. 공백을 제외한 글자 수 계산

  // 정규표현식(/\s/g)을 사용하여 띄어쓰기나 줄바꿈을 모두 찾은 뒤 빈 문자열로 치환한다.

  const textWithoutSpaces = text.replace(/\s/g, '');

  // 5. 진척도 바의 퍼센트 계산

  // (현재 글자 수 / 최대 글자 수) * 100을 통해 백분율을 구한다.

  // 100%를 넘지 않도록 Math.min 함수를 사용해 최댓값을 100으로 제한한다.

  const progressPercentage = Math.min((text.length / MAX_LENGTH) * 100, 100);

  // 6. 현재 글자 수가 최대치를 넘었는지 확인하는 변수

  const isOverLimit = text.length > MAX_LENGTH;

  return (
    <div className='counter-card'>
      <h2>메모 작성하기</h2>

      {/* 사용자의 입력을 받는 textarea */}

      <textarea
        className={`text-input ${isOverLimit ? 'input-error' : ''}`}
        placeholder='내용을 입력해주세요 (최대 50자)'
        value={text}
        onChange={handleChange}
      ></textarea>

      {/* 진척도 바 (Progress Bar) 영역 */}

      <div className='progress-container'>
        <div
          className={`progress-bar ${isOverLimit ? 'progress-error' : ''}`}
          // 리액트의 인라인 스타일을 활용하여 계산된 퍼센트만큼 너비를 동적으로 변경한다.

          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className='status-bar'>
        {/* 전체 글자 수 및 공백 제외 글자 수 표시 */}

        <div className='count-info'>
          <p className={`count-text ${isOverLimit ? 'limit-reached' : ''}`}>
            전체: <strong>{text.length}</strong> / {MAX_LENGTH}
          </p>

          <p className='count-text-small'>
            (공백 제외: {textWithoutSpaces.length}자)
          </p>
        </div>

        {/* 7. 조건부 렌더링: 글자 수를 초과했을 때만 경고 문구를 보여준다. */}

        {isOverLimit && (
          <span className='warning-msg'>글자수가 너무 많습니다!</span>
        )}
      </div>

      {/* 텍스트 초기화 버튼 */}

      <button className='clear-btn' onClick={() => setText('')}>
        다 지우기
      </button>
    </div>
  );
};

export default CharacterCounter;

//에전에는 매개변수에 event라고 작성했지만 너무 길어서 e로 작성함
