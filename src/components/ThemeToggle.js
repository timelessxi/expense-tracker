import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      Toggle Dark Mode
    </button>
  );
};

export default ThemeToggle;
