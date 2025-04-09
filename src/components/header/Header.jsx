import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

// Объект с переводами для Header
const headerTranslations = {
  ru: {
    home: "Опрос",
    events: "Гаджеты",
    figures: "Участники",
    about: "Главная",
    lightTheme: "Светлая тема",
    darkTheme: "Темная тема",
    siteName: logo
  },
  en: {
    home: "Quiz",
    events: "Gadgets",
    figures: "Participants",
    about: "Home",
    lightTheme: "Light Theme",
    darkTheme: "Dark Theme",
    siteName: logo
  },
  ky: {
    home: "Опрос",
    events: "Гаджеттер",
    figures: "Инсандар",
    about: "Главная",
    lightTheme: "Жарык тема",
    darkTheme: "Караңгы тема",
    siteName: logo
  }
};

const Header = ({ language, setLanguage, darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Получаем переводы для текущего языка
  const t = headerTranslations[language] || headerTranslations.ru;

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle dark/light theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <header className="header">
    <div className="header-logo">
      <Link to="/"><img src={t.siteName} className="logo" alt="Logo" /></Link>
    </div>
  
    <nav className="header-nav">
      <ul>
        <li><Link to="/">{t.home}</Link></li>
        <li><Link to="/Page2">{t.events}</Link></li>
        <li><Link to="/Us">{t.figures}</Link></li>
        <li><Link to="/homePage">{t.about}</Link></li>
      </ul>
    </nav>
  
    <div className="header-controls">
      <div className="language-selector">
        <select value={language} onChange={handleLanguageChange}>
          <option value="ru">Русский</option>
          <option value="en">English</option>
          <option value="ky">Кыргызча</option>
        </select>
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </div>
    </div>
  </header>
  
  );
};

export default Header;
