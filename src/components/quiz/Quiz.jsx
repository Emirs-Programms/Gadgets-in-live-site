import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = [
    {
      questionText: 'Сколько времени вы используете телефон в день?',
      options: ['30 мин', '1 час', '2-4 часа', 'более 4 часов'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },
    {
      questionText: 'В вашем доме подключен Wi-Fi',
      options: ['Да', 'Нет'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },
    {
      questionText: 'Вас часто ругают из за телефона',
      options: ['Да', 'Нет'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },
    {
      questionText: 'Слышали вы ли о вреде от гаджетов',
      options: ['Да', 'Нет'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },
    {
      questionText: 'Как вам легче общаться ',
      options: ['В живую', 'Через Соц Сеть'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },
    {
      questionText: 'По дороге домой Вы обнаружили, что забыли гаджет дома, Ваши действия ',
      options: ['не вернетесь домой, ведь ничего страшного не произошло', 'вернетесь домой, так как нечем заняться весь день','домой не вернетесь, но весь день будете чувствовать себя не комфортно', "вернетесь, потому что могут позвонить родители"],
      correctAnswer: 'Правильный Вариант Вопроса'
    },
    {
      questionText: 'Сколько часов в сутки вы спите',
      options: ['8 и более часов', '6-7 часов','4-5 часов','часто мучает бессоница'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },{
      questionText: ' Ваши родители ругают вас, за то, что вы много времени проводите с гаджетом ',
      options: ['да', 'нет', 'родители не обращают на это внимания'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },{
      questionText: 'Преподаватели часто делают вам замечания, чтобы вы убрали телефон во время урока',
      options: ['да','нет' ,'преподаватели не замечают','телефон во время урока отключаю'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },{
      questionText: 'В ситуации когда компьютер работает медленно',
      options: ['спокойно пытаетесь найти причину','чувствуете сильное раздражение' ,'бьете по системному блоку','ничего не делаю'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },{
      questionText: 'При устных ответах у доски или перед группой людей вы',
      options: ['чувствуете себя уверенно', 'чувствуете себя некомфортно, сильно волнуетесь'],
      correctAnswer: 'Правильный Вариант Вопроса'
    },
  ];

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    
    const newAnswer = {
      question: questions[currentQuestion].questionText,
      userAnswer: answer,
      isCorrect: isCorrect
    };
    
    setUserAnswers([...userAnswers, newAnswer]);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      saveResults();
    }
  };

  const saveResults = () => {
    const results = {
      date: new Date().toISOString(),
      totalScore: score,
      answers: userAnswers
    };

    // Save to localStorage
    const savedResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    savedResults.push(results);
    localStorage.setItem('quizResults', JSON.stringify(savedResults));
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Спасибо</h2>
          <p>Вы очень нам помогли</p>
          
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}/{questions.length}</h2>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="answer-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
