/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
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
          height="54px"
          width="54px"
          className="theme-toggle"
          onClick={() => setActiveTheme(inactiveTheme)}
          src="/dark.svg"
          alt={`Change to ${inactiveTheme} mode`}
        />
      ) : (
        <img
          height="54px"
          width="54px"
          className="theme-toggle"
          onClick={() => setActiveTheme(inactiveTheme)}
          src="/light.svg"
          alt={`Change to ${inactiveTheme} mode`}
        />
      )}
    </>
  );
};

export default ThemeToggle;
