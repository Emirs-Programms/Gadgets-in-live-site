import React, { useState } from 'react';
import './Page2.css';
import iphoneImage from './images/iphone.jpg';
import samsungImage from './images/Samsung.jpg';
import macbookImage from './images/Macbook.jpg';
import thinkpadImage from './images/ThinkPad.jpg';
import watchImage from './images/smartwatch.jpg';
import vrHeadsetImage from './images/Vrglass.jpg';
import smartSpeakerImage from './images/ymni.jpg';
import droneImage from './images/dron.jpg';


// Объект с переводами для Page2
const translations = {
  ru: {
    header: {
      title: "Современные гаджеты",
      subtitle: "Интересные факты о технологиях"
    },
    tabs: {
      phones: "Телефоны и ноутбуки",
      other: "Другие гаджеты"
    },
    phones: {
      title: "Телефоны и ноутбуки",
      facts: [
        {
          id: 1,
          title: "iPhone",
          description: "Первый iPhone был представлен Стивом Джобсом в 2007 году и произвел революцию на рынке смартфонов. Сегодня iPhone является одним из самых популярных смартфонов в мире.",
          image: iphoneImage
        },
        {
          id: 2,
          title: "Samsung Galaxy",
          description: "Линейка Samsung Galaxy включает в себя одни из самых инновационных смартфонов с гибкими дисплеями, которые могут складываться и раскладываться.",
          image: samsungImage
        },
        {
          id: 3,
          title: "MacBook",
          description: "MacBook от Apple известен своим элегантным дизайном и производительностью. Последние модели оснащены собственными процессорами Apple Silicon, которые обеспечивают высокую производительность и энергоэффективность.",
          image: macbookImage
        },
        {
          id: 4,
          title: "ThinkPad",
          description: "Ноутбуки ThinkPad, изначально разработанные IBM, а теперь производимые Lenovo, известны своей надежностью и прочностью. Они популярны среди бизнес-пользователей и даже используются на Международной космической станции.",
          image: thinkpadImage
        }
      ]
    },
    other: {
      title: "Другие гаджеты",
      facts: [
        {
          id: 1,
          title: "Умные часы",
          description: "Современные умные часы могут отслеживать показатели здоровья, принимать звонки, отправлять сообщения и даже снимать ЭКГ. Apple Watch может обнаруживать падения и автоматически вызывать экстренные службы.",
          image: watchImage
        },
        {
          id: 2,
          title: "VR-гарнитуры",
          description: "Гарнитуры виртуальной реальности, такие как Oculus Quest и PlayStation VR, позволяют пользователям погрузиться в виртуальные миры. Они используются не только для игр, но и для обучения, медицины и архитектурного дизайна.",
          image: vrHeadsetImage
        },
        {
          id: 3,
          title: "Умные колонки",
          description: "Умные колонки с голосовыми помощниками, такими как Amazon Alexa и Google Assistant, могут управлять умным домом, отвечать на вопросы и даже заказывать товары онлайн по голосовой команде.",
          image: smartSpeakerImage
        },
        {
          id: 4,
          title: "Дроны",
          description: "Современные дроны оснащены высококачественными камерами, системами стабилизации и автоматической навигации. Они используются для аэрофотосъемки, доставки товаров и даже в сельском хозяйстве для мониторинга посевов.",
          image: droneImage
        }
      ]
    },
    funFact: {
      title: "Интересный факт дня",
      text: "Первый мобильный телефон, Motorola DynaTAC 8000X, весил почти 1 кг и стоил около 4000 долларов. Его батареи хватало всего на 30 минут разговора, а заряжать его нужно было 10 часов."
    }
  },
  en: {
    header: {
      title: "Modern Gadgets",
      subtitle: "Interesting facts about technology"
    },
    tabs: {
      phones: "Phones & Laptops",
      other: "Other Gadgets"
    },
    phones: {
      title: "Phones and Laptops",
      facts: [
        {
          id: 1,
          title: "iPhone",
          description: "The first iPhone was introduced by Steve Jobs in 2007 and revolutionized the smartphone market. Today, the iPhone is one of the most popular smartphones in the world.",
          image: iphoneImage
        },
        {
          id: 2,
          title: "Samsung Galaxy",
          description: "The Samsung Galaxy line includes some of the most innovative smartphones with flexible displays that can fold and unfold.",
          image: samsungImage
        },
        {
          id: 3,
          title: "MacBook",
          description: "Apple's MacBook is known for its elegant design and performance. The latest models are equipped with Apple's own Silicon processors, which provide high performance and energy efficiency.",
          image: macbookImage
        },
        {
          id: 4,
          title: "ThinkPad",
          description: "ThinkPad laptops, originally developed by IBM and now manufactured by Lenovo, are known for their reliability and durability. They are popular among business users and are even used on the International Space Station.",
          image: thinkpadImage
        }
      ]
    },
    other: {
      title: "Other Gadgets",
      facts: [
        {
          id: 1,
          title: "Smartwatches",
          description: "Modern smartwatches can track health metrics, take calls, send messages, and even take ECGs. The Apple Watch can detect falls and automatically call emergency services.",
          image: watchImage
        },
        {
          id: 2,
          title: "VR Headsets",
          description: "Virtual reality headsets like the Oculus Quest and PlayStation VR allow users to immerse themselves in virtual worlds. They are used not only for gaming but also for education, medicine, and architectural design.",
          image: vrHeadsetImage
        },
        {
          id: 3,
          title: "Smart Speakers",
          description: "Smart speakers with voice assistants like Amazon Alexa and Google Assistant can control smart homes, answer questions, and even order products online by voice command.",
          image: smartSpeakerImage
        },
        {
          id: 4,
          title: "Drones",
          description: "Modern drones are equipped with high-quality cameras, stabilization systems, and automatic navigation. They are used for aerial photography, product delivery, and even in agriculture for crop monitoring.",
          image: droneImage
        }
      ]
    },
    funFact: {
      title: "Fun Fact of the Day",
      text: "The first mobile phone, the Motorola DynaTAC 8000X, weighed almost 1 kg and cost about $4,000. Its battery lasted only 30 minutes of talk time, and it needed to be charged for 10 hours."
    }
  },
  ky: {
    header: {
      title: "Заманбап гаджеттер",
      subtitle: "Технологиялар жөнүндө кызыктуу фактылар"
    },
    tabs: {
      phones: "Телефондор жана ноутбуктар",
      other: "Башка гаджеттер"
    },
    phones: {
      title: "Телефондор жана ноутбуктар",
      facts: [
        {
          id: 1,
          title: "iPhone",
          description: "Биринчи iPhone Стив Джобс тарабынан 2007-жылы тартууланган жана смартфондор рыногунда революция жасаган. Бүгүнкү күндө iPhone дүйнөдөгү эң популярдуу смартфондордун бири.",
          image: iphoneImage
        },
        {
          id: 2,
          title: "Samsung Galaxy",
          description: "Samsung Galaxy сериясы ийилип жана ачыла турган ийкемдүү дисплейлери бар эң инновациялык смартфондорду камтыйт.",
          image: samsungImage
        },
        {
          id: 3,
          title: "MacBook",
          description: "Apple компаниясынын MacBook ноутбуктары элегантуу дизайны жана өндүрүмдүүлүгү менен белгилүү. Акыркы моделдер жогорку өндүрүмдүүлүктү жана энергия натыйжалуулугун камсыз кылган Apple Silicon процессорлору менен жабдылган.",
          image: macbookImage
        },
        {
          id: 4,
          title: "ThinkPad",
          description: "Баштапкыда IBM тарабынан иштелип чыккан, азыр Lenovo тарабынан чыгарылган ThinkPad ноутбуктары өзүнүн ишенимдүүлүгү жана бекемдиги менен белгилүү. Алар бизнес колдонуучулар арасында популярдуу жана Эл аралык космос станциясында да колдонулат.",
          image: thinkpadImage
        }
      ]
    },
    other: {
      title: "Башка гаджеттер",
      facts: [
        {
          id: 1,
          title: "Акылдуу сааттар",
          description: "Заманбап акылдуу сааттар ден соолук көрсөткүчтөрүн көзөмөлдөп, чалууларды кабыл алып, билдирүүлөрдү жөнөтүп, ЭКГ тартып алышат. Apple Watch кулоолорду аныктап, автоматтык түрдө тез жардам кызматтарын чакыра алат.",
          image: watchImage
        },
        {
          id: 2,
          title: "VR гарнитуралары",
          description: "Oculus Quest жана PlayStation VR сыяктуу виртуалдык реалдуулук гарнитуралары колдонуучуларга виртуалдык дүйнөгө кирүүгө мүмкүнчүлүк берет. Алар оюндар үчүн гана эмес, билим берүү, медицина жана архитектуралык дизайн үчүн да колдонулат.",
          image: vrHeadsetImage
        },
        {
          id: 3,
          title: "Акылдуу колонкалар",
          description: "Amazon Alexa жана Google Assistant сыяктуу үн жардамчылары бар акылдуу колонкалар акылдуу үйдү башкарып, суроолорго жооп берип, үн буйругу аркылуу онлайн буюмдарга заказ бере алышат.",
          image: smartSpeakerImage
        },
        {
          id: 4,
          title: "Дрондор",
          description: "Заманбап дрондор жогорку сапаттагы камералар, стабилизация системалары жана автоматтык навигация менен жабдылган. Алар аэрофотосъемка, товарларды жеткирүү жана айыл чарбасында түшүмдү көзөмөлдөө үчүн да колдонулат.",
          image: droneImage
        }
      ]
    },
    funFact: {
      title: "Күндүн кызыктуу факты",
      text: "Биринчи мобилдик телефон, Motorola DynaTAC 8000X, дээрлик 1 кг салмакта болгон жана болжол менен 4000 доллар турган. Анын батареясы 30 мүнөттүк сүйлөшүүгө гана жеткен, ал эми аны заряддоо үчүн 10 саат керек болгон."
    }
  }
};

export default function Page2({ language = 'ru', darkMode = false }) {
  const [activeTab, setActiveTab] = useState('phones');
  
  // Получаем переводы для текущего языка
  const t = translations[language] || translations.ru;

  return (
    <div className={`gadgets-page ${darkMode ? 'dark-theme' : ''}`}>
      <header className="gadgets-header">
        <h1>{t.header.title}</h1>
        <p>{t.header.subtitle}</p>
      </header>

      <div className="tabs-container">
        <div className="tabs">
          <button 
                        className={`tab ${activeTab === 'phones' ? 'active' : ''}`}
                        onClick={() => setActiveTab('phones')}
                      >
                        {t.tabs.phones}
                      </button>
                      <button 
                        className={`tab ${activeTab === 'other' ? 'active' : ''}`}
                        onClick={() => setActiveTab('other')}
                      >
                        {t.tabs.other}
                      </button>
                    </div>
            
                    <div className="tab-content">
                      {activeTab === 'phones' && (
                        <div className="facts-container">
                          <h2>{t.phones.title}</h2>
                          
                          {t.phones.facts.map(fact => (
                            <div key={fact.id} className="fact-card">
                              <img src={fact.image} alt={fact.title} />
                              <h3>{fact.title}</h3>
                              <p>{fact.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
            
                      {activeTab === 'other' && (
                        <div className="facts-container">
                          <h2>{t.other.title}</h2>
                          
                          {t.other.facts.map(fact => (
                            <div key={fact.id} className="fact-card">
                              <img src={fact.image} alt={fact.title} />
                              <h3>{fact.title}</h3>
                              <p>{fact.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
            
                  <div className="fun-fact">
                    <h3>{t.funFact.title}</h3>
                    <p>{t.funFact.text}</p>
                  </div>
                </div>
              );
            }
            