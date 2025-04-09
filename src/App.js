import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/homePage/Home';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Us/Us';
import Quiz from './components/quiz/Quiz';
import './App.css';
import Footer from './components/Footer/Footer';

// Переводы для футера
const footerTranslations = {
  ru: {
    copyright: "Made by Emirchik, Robiya, Akbii and Alimana"
  },
  en: {
    copyright: "Made by Emirchik, Robiya, Akbii and Alimana"
  },
  ky: {
    copyright: "Made by Emirchik, Robiya, Akbii and Alimana"
  }
};

function App() {
  // Initialize language from localStorage or default to 'ru'
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'ru'
  );
  
  // Initialize dark mode from localStorage or default to false
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );
  
  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // Save dark mode preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Получаем переводы для текущего языка
  const t = footerTranslations[language] || footerTranslations.ru;

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
        <main>
          <Routes>
            <Route path="/homePage" element={<Home language={language} darkMode={darkMode} />} />
            <Route path="/page2" element={<Page2 language={language} darkMode={darkMode} />} />
            <Route path="/Us" element={<Page3 language={language} darkMode={darkMode} />} />
            <Route path='/' element={<Quiz language={language} darkMode={darkMode} />} />
          </Routes>
        </main>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
