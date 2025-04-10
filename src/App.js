import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


// Components
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Quiz from './components/quiz/Quiz';
import Page2 from './components/Page2/Page2';
import Us from './components/Us/Us';
import Home from './components/homePage/Home';

function App() {
  const [language, setLanguage] = useState('ru');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedDarkMode === null) {
      // If no saved preference, check system preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
      localStorage.setItem('darkMode', prefersDarkMode);
    } else {
      setDarkMode(savedDarkMode === 'true');
    }

    // Set saved language if available
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="app-container">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Quiz language={language} />} />
            <Route path="/Page2" element={<Page2 language={language} />} />
            <Route path="/Us" element={<Us language={language} />} />
            <Route path="/homePage" element={<Home language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;