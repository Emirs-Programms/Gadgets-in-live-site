import React from 'react';
import './Home.css';

const translations = {
  ru: {
    sections: [
      {
        id: 1,
        title: "Гаджеты",
        description: "Гаджеты стали неотъемлемой частью нашей жизни. Мы используем их каждый день, с их широким использованием. Может такие гаджеты, как телефоны и компьютеры, это очень полезный инструмент, связь по всему миру доступ к неограниченной информации, и другие вещи. Но раньше телефоны не были такими полезными, какие они сейчас. Создан был телефон А. Г. Бэлл в 1876, использован он был лишь для связи, да и работал не так хорошо, но для того времени это было прорывное изобретение. Обретя популярность, телефон начал распространяться, были проведены телефонные сети. Изобретение было усовершенствовано до дискового телефона, что обрело большую популярность и распространение по миру.",
        image: "./images/gadgets.jpg"
      },
      {
        id: 2,
        title: "Плюсы и минус.",
        description: " Длительное использование гаджетов, таких как телефоны и компьютеры, имеет как положительные, так и отрицательные стороны. Телефоны, компьютеры это очень полезные инструменты, у них есть огромное количество использований. Доступ к интернету, неограниченному источнику как полезной так и не очень информации. Широкая коммуникация, неограниченная связь по всему миру. Развлечения, работа, образование, навигация, это ещё очень немногое, что предлагают телефоны и компьютеры. Может такой широкий спектр возможностей и привлекает, но от длительного использования гаджетов могут быть и свои последствия. Ухудшение зрения,  проблемы с осанкой, зависимость, снижение физической активности, искривление позвоночника. Кроме физических проблем могут быть и психологические. Сильная раздражительность, тревожность, развитие депрессии. Используя гаджеты подростки получают доступ к тем вещам, к которым не должны были. То материалы с жестокостью и насилием, так и то, что может навсегда разрушить психику ещё не сформировавшихся как личностей подростков.",
        image: "./images/plus_and_minus.jpg"
      },
      {
        id: 3,
        title: "Негативное влияние",
        description: "Зрение – длительное использование экранов вызывает напряжение глаз, синдром сухого глаза, ухудшение зрения. Ослабление осанки – длительное сидение с гаджетами приводит к искривлению позвоночника и болям в спине.    Нарушение сна – синий свет экранов подавляет выработку мелатонина, вызывая бессонницу.    Психологическое воздействие – повышенная тревожность, стресс, зависимость от социальных сетей.",
        image: "/images/bad.jpg"
      },
      {
        id: 4,
        title: "Положительное влияние",
        description: "Образование – доступ к онлайн-курсам, обучающим программам и книгам.    Развитие творческих навыков – возможность заниматься графическим дизайном, музыкой, программированием.        Мониторинг здоровья – умные часы и фитнес-трекеры помогают следить за активностью и сном.",
        image: "/images/good.jpg"
      }
    ]
  },
  en: {
    sections: [
      {
        id: 1,
        title: "Gadgets",
        description: "Gadgets have become an integral part of our lives. We use them every day, with their wide use. Maybe gadgets such as phones and computers are a very useful tool, communication around the world, access to unlimited information, and other things. But before, phones were not as useful as they are now. The telephone was created by A. G. Bell in 1876, it was used only for communication, and it did not work so well, but for that time it was a breakthrough invention. Having gained popularity, the telephone began to spread, telephone networks were carried out. The invention was improved to a rotary telephone, which gained great popularity and spread around the world.",
        image: "./images/gadgets.jpg"
      },
      {
        id: 2,
        title: "Pros and cons.",
        description: " Long-term use of gadgets such as phones and computers has both positive and negative sides. Phones, computers are very useful tools, they have a huge number of uses. Access to the Internet, an unlimited source of both useful and not so useful information. Wide communication, unlimited communication around the world. Entertainment, work, education, navigation, this is still very little that phones and computers offer. Such a wide range of possibilities may be attractive, but long-term use of gadgets can have its consequences. Deterioration of vision, problems with posture, addiction, decreased physical activity, curvature of the spine. In addition to physical problems, there can also be psychological ones. Strong irritability, anxiety, development of depression. Using gadgets, teenagers get access to things they should not have. Both materials with cruelty and violence, and things that can permanently destroy the psyche of teenagers who have not yet formed as individuals.",
        image: "./images/plus_and_minus.jpg"
      },
      {
        id: 3,
        title: "Negative impact",
        description: "Vision - prolonged use of screens causes eye strain, dry eye syndrome, deterioration of vision. Weakening of posture - prolonged sitting with gadgets leads to curvature of the spine and back pain. Sleep disturbance - blue light from screens suppresses the production of melatonin, causing insomnia. Psychological impact - increased anxiety, stress, addiction to social networks.",
        image: "/images/bad.jpg"
      },
      {
        id: 4,
        title: "Positive impact",
        description: "Education - access to online courses, training programs and books. Developing creative skills – the opportunity to engage in graphic design, music, programming. Monitoring health – smart watches and fitness trackers help monitor activity and sleep.",
        image: "/images/good.jpg"
      }
    ]
  },
  ky: {
    sections: [
      {
        id: 1,
        title: "Гаджеттер",
        description: "Гаджеттер жашообуздун ажырагыс бөлүгү болуп калды. Биз аларды күн сайын кеңири колдонуу менен колдонобуз. Балким, телефондор жана компьютерлер сыяктуу гаджеттер абдан пайдалуу курал, бүткүл дүйнө боюнча байланыш, чексиз маалыматка жетүү жана башка нерселер. Бирок ал кезде телефондор азыркыдай пайдалуу эмес болчу. Телефонду A. G. Bell 1876-жылы жараткан, ал байланыш үчүн гана колдонулган жана ал анчалык деле жакшы иштеген эмес, бирок ошол убакта ал укмуштуу ойлоп табуу болгон. Популярдуулукка ээ болуп, телефон жайылып, телефон тармактары орнотула баштады. Ойлоп табуу ротациялык телефонго чейин өркүндөтүлүп, чоң популярдуулукка ээ болуп, бүткүл дүйнөгө тараган.",
        image: "./images/gadgets.jpg"
      },
      {
        id: 2,
        title: "Жакшы жана жаман жактары.",
        description: "Телефон жана компьютер сыяктуу гаджеттерди узак мөөнөткө колдонуунун оң жана терс жактары бар. Телефондор, компьютерлер абдан пайдалуу инструменттер, алар абдан көп колдонууга ээ. Интернетке кирүү, пайдалуу жана анчалык деле пайдалуу эмес маалыматтын чексиз булагы. Кең байланыш, дүйнө жүзү боюнча чексиз байланыш. Көңүл ачуу, жумуш, билим берүү, навигация - бул телефондор жана компьютерлер сунуштаган нерселердин бир канчасы гана. Мүмкүнчүлүктөрдүн мындай кеңири диапазону жагымдуу болушу мүмкүн, бирок гаджеттерди узак мөөнөткө колдонуу анын кесепеттерин алып келиши мүмкүн. Көрүүнүн начарлашы, позадагы көйгөйлөр, көз карандылык, физикалык активдүүлүктүн төмөндөшү, омуртканын кыйшаюусу. Физикалык көйгөйлөрдөн тышкары, психологиялык көйгөйлөр да болушу мүмкүн. Катуу кыжырдануу, тынчсыздануу, депрессиянын өнүгүшү. Гаджеттерди колдонуу менен өспүрүмдөр аларда болбошу керек болгон нерселерге мүмкүнчүлүк алышат. Бул ырайымсыздык жана зордук-зомбулук камтылган материалдар, ошондой эле инсан катары калыптана элек өспүрүмдөрдүн психикасын биротоло талкалай турган нерселер.",
        image: "./images/plus_and_minus.jpg"
      },
      {
        id: 3,
        title: "Терс таасир",
        description: "Көрүү – экранды көпкө колдонуу көздүн чыңалуусуна, кургак көз синдромуна жана көрүүнүн начарлашына алып келет.    Алсызданышы поза – узак отуруу гаджетами алып келет кыйшаюу омурткасы жана оорушу белдин.    Уйкунун бузулушу – экрандан келген көк жарык мелатониндин өндүрүшүн бастырып, уйкусуздукту пайда кылат.    Психологиялык таасир - тынчсыздануу, стресс, коомдук тармактарга көз карандылыктын күчөшү.",
        image: "/images/bad.jpg"
      },
      {
        id: 4,
        title: "Позитивдүү таасир",
        description: "Билим берүү – онлайн курстарга, окуу куралдарына жана китептерге кирүү. Чыгармачыл көндүмдөрдү өнүктүрүү – графикалык дизайн, музыка, программалоо менен алектенүү. Ден соолукту көзөмөлдөө – акылдуу сааттар жана фитнес-трекерлер активдүүлүккө жана уйкуга көз салууга жардам берет.",
        image: "/images/good.jpg"
      }
    ]
  }
};

const Home = ({ language, darkMode }) => {
  const content = translations[language] || translations.ru;

  return (
    <div className={`home ${darkMode ? 'dark-theme' : ''}`}>
      {content.sections.map(section => (
        <section key={section.id} className="historical-section">
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <div className="section-image">
            <img src={section.image} alt={section.title} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
