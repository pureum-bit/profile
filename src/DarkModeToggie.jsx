import React, { useState } from 'react';

const DarkModeToggie = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-box ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2>{`ThemeMode : ${isDarkMode ? 'DarkMode' : 'LightMode'}`}</h2>
      {/* 개발 전 맞는지 확인하는 용도 */}
      <p>상태값(isDarkMode) : {isDarkMode.toString()}</p>
      <button onClick={toggleTheme} className='toggle-btm'>
        {isDarkMode ? 'DarkMode' : 'LightMode'}
      </button>
    </div>
  );
};

export default DarkModeToggie;
