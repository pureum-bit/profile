import { useState } from 'react';

// 한국어 명언 데이터베이스
const QUOTES_DATA = [
  { text: '삶이 있는 한 희망은 있다.', author: '키케로' },
  { text: '산다는 것 그것은 치열한 전투이다.', author: '로망 롤랑' },
  {
    text: '언제나 현재에 집중할 수 있다면 행복할 것이다.',
    author: '파울로 코엘료',
  },
  { text: '피할 수 없으면 즐겨라.', author: '로버트 엘리엇' },
  {
    text: '오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한걸음 더 진보한다.',
    author: '뉴턴',
  },
  {
    text: '생각하는 대로 살지 못하면 사는 대로 생각하게 된다.',
    author: '스콧 니어링',
  },
  { text: '행복의 문이 하나 닫히면 다른 문이 열린다.', author: '헬렌 켈러' },
];

export default function GlassQuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(QUOTES_DATA[0]);
  const [history, setHistory] = useState([]);

  // 명언 생성 시 현재 명언을 히스토리로 기록
  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES_DATA.length);
    setHistory([currentQuote, ...history]);
    setCurrentQuote(QUOTES_DATA[randomIndex]);
  };

  // 개별 삭제: for 문을 사용한 배열 재구성
  const handleDelete = (targetIndex) => {
    const newHistory = [];
    for (let i = 0; i < history.length; i++) {
      if (i !== targetIndex) {
        newHistory.push(history[i]);
      }
    }
    setHistory(newHistory);
  };

  // 전체 삭제
  const handleClearAll = () => {
    setHistory([]);
  };

  // for 문을 사용하여 히스토리 아이템 렌더링
  const renderHistoryItems = () => {
    const items = [];
    for (let i = 0; i < history.length; i++) {
      items.push(
        <li
          key={i}
          className='group flex justify-between items-center p-4 mb-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transition-all hover:bg-white/10'
        >
          <div className='flex flex-col'>
            <span className='text-sm text-slate-200'>"{history[i].text}"</span>
            <span className='text-xs text-slate-500 mt-1'>
              — {history[i].author}
            </span>
          </div>
          <button
            onClick={() => handleDelete(i)}
            className='ml-4 text-slate-500 hover:text-rose-400 font-bold transition-colors'
          >
            X
          </button>
        </li>,
      );
    }
    return items;
  };

  return (
    <div className='min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden'>
      {/* 배경 블러 효과 */}
      <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]'></div>
      <div className='absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]'></div>

      <div className='max-w-xl w-full relative z-10'>
        <h1
          className='text-4xl font-bold text-white text-center mb-10 tracking-tight'
          style={{ color: '#fff' }}
        >
          명언 생성기
        </h1>

        {/* 메인 명언 패널 */}
        <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl mb-8 text-center'>
          <p className='text-2xl font-medium text-white mb-6 leading-relaxed italic'>
            "{currentQuote.text}"
          </p>
          <p className='text-indigo-400 font-bold uppercase tracking-widest text-sm'>
            {currentQuote.author}
          </p>
          <button
            onClick={handleGenerate}
            className='mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20'
          >
            새로운 명언 생성
          </button>
        </div>

        {/* 히스토리 패널 */}
        <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8'>
          <div className='flex justify-between items-center mb-6 border-b border-white/10 pb-4'>
            <h2
              className='text-xl font-bold text-white'
              style={{ color: '#fff' }}
            >
              최근 기록
            </h2>
            {history.length > 0 && (
              <button
                onClick={handleClearAll}
                className='text-xs text-slate-400 hover:text-white transition-colors'
              >
                전체 기록 삭제
              </button>
            )}
          </div>

          <ul className='max-h-[300px] overflow-y-auto pr-2 custom-scrollbar'>
            {history.length === 0 ? (
              <p className='text-center text-slate-500 py-10'>
                기록이 없습니다.
              </p>
            ) : (
              renderHistoryItems()
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

// 제시된 코드는 Tailwind CSS가 프로젝트에 설치되어 있거나 CDN으로 연결된 환경에서 즉시 사용 가능합니다. 명언 생성기 프로젝트가 성공적으로 완성되기를 바랍니다!
