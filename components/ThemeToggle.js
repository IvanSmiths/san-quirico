/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from 'react';

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <>
      {activeTheme === 'dark' ? (
        <img
          height="25px"
          width="25px"
          className="theme-toggle"
          onClick={() => setActiveTheme(inactiveTheme)}
          src="/moon.svg"
          alt={`Change to ${inactiveTheme} mode`}
        />
      ) : (
        <img
          height="25px"
          width="25px"
          className="theme-toggle"
          onClick={() => setActiveTheme(inactiveTheme)}
          src="/sun.svg"
          alt={`Change to ${inactiveTheme} mode`}
        />
      )}
    </>
  );
};

export default ThemeToggle;
