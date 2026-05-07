/**
 * 2. 부모 컴포넌트: App
 */
export default function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* 예제 1: 일반적인 텍스트를 children으로 전달 */}
      <ProfileCard name='김철수' imagePath='/assets/profile.jpg'>
        <p>안녕하세요! 신입 웹 개발자 김철수입니다. 리액트를 배우고 있어요.</p>
      </ProfileCard>

      {/* 예제 2: 다른 HTML 태그나 컴포넌트를 children으로 전달 */}
      <ProfileCard name='이영희' imagePath='/assets/profile.jpg'>
        <ul>
          <li>주요 기술: React, CSS</li>
          <li>취미: 사진 찍기</li>
        </ul>
        <button onClick={() => alert('반가워요!')}>인사하기</button>
      </ProfileCard>
    </div>
  );
}
