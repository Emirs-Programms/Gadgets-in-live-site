import React from 'react';
import './Us.css';

import forsometime from './usImg/someTime.jpg';
// import person1Image from '../../assets/images/person1.jpg';
// import person2Image from '../../assets/images/person2.jpg';
// import person3Image from '../../assets/images/person3.jpg';
// import person4Image from '../../assets/images/person4.jpg';

const Us = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'ㅤМараш-Оглы Эмир',
      contribution: 'Разработка сайта и создание дизайна проекта',
      image: forsometime,
    },
    {
      id: 2,
      name: 'ㅤㅤДооронов Акбий',
      contribution: 'Все исследования и анализ данных',
      image: forsometime,
    },
    {
      id: 3,
      name: 'ㅤНурмамадова Робия',
      contribution: 'Анкетирование и сбор данных',
      image: forsometime,
    },
    {
      id: 4,
      name: 'Сулайманова Алимана',
      contribution: 'Создание стенда и его декорация его',
      image: forsometime,
    },
  ];

  return (
    <div className="us-container">
      <h2 className="us-title">Наша команда</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-image-container">
              <img src={member.image} alt={member.name} className="member-image" />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-contribution">{member.contribution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Us;
