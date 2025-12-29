import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'tj' | 'ru' | 'en';

interface Translations {
  [key: string]: {
    tj: string;
    ru: string;
    en: string;
  };
}

export const translations: Translations = {
  // Hero Section
  hero_greeting: {
    tj: 'Салом, ман',
    ru: 'Привет, я',
    en: 'Hello, I am',
  },
  hero_role: {
    tj: 'Таҳиякунандаи Frontend',
    ru: 'Frontend Разработчик',
    en: 'Frontend Developer',
  },
  hero_description: {
    tj: 'Ман барномасози Frontend-ам бо таҷрибаи васеъ дар сохтани веб-барномаҳои муосир ва зебо',
    ru: 'Я Frontend разработчик с обширным опытом создания современных и красивых веб-приложений',
    en: 'I am a Frontend Developer with extensive experience in building modern and beautiful web applications',
  },
  view_projects: {
    tj: 'Дидани лоиҳаҳо',
    ru: 'Посмотреть проекты',
    en: 'View Projects',
  },
  contact_me: {
    tj: 'Бо ман тамос гиред',
    ru: 'Связаться со мной',
    en: 'Contact Me',
  },
  // About Section
  about_title: {
    tj: 'Дар бораи ман',
    ru: 'Обо мне',
    en: 'About Me',
  },
  about_description: {
    tj: 'Ман Юсуф Додаров, 21 ноябри соли 2009 дар шаҳри Душанбе таваллуд шудаам. Ман ҳамчун барномасози Frontend фаъолият дорам ва бо технологияҳои муосир кор мекунам.',
    ru: 'Я Юсуф Додаров, родился 21 ноября 2009 года в городе Душанбе. Работаю Frontend разработчиком и специализируюсь на современных технологиях.',
    en: 'I am Yusuf Dodarov, born on November 21, 2009 in Dushanbe. I work as a Frontend Developer specializing in modern technologies.',
  },
  design_quality: {
    tj: 'Сифати дизайн',
    ru: 'Качество дизайна',
    en: 'Design Quality',
  },
  user_satisfaction: {
    tj: 'Розигии корбарон',
    ru: 'Удовлетворенность пользователей',
    en: 'User Satisfaction',
  },
  work_readiness: {
    tj: 'Омодагӣ барои кор',
    ru: 'Готовность к работе',
    en: 'Work Readiness',
  },
  frontend_knowledge: {
    tj: 'Дониши Frontend',
    ru: 'Знание Frontend',
    en: 'Frontend Knowledge',
  },
  // Skills Section
  skills_title: {
    tj: 'Малакаҳо ва технологияҳо',
    ru: 'Навыки и технологии',
    en: 'Skills & Technologies',
  },
  skills_description: {
    tj: 'Инҳо технологияҳое мебошанд, ки ман бо онҳо кор мекунам',
    ru: 'Технологии, с которыми я работаю',
    en: 'Technologies I work with',
  },
  // Projects Section
  projects_title: {
    tj: 'Лоиҳаҳои ман',
    ru: 'Мои проекты',
    en: 'My Projects',
  },
  projects_description: {
    tj: 'Баъзе аз лоиҳаҳое, ки ман онҳоро сохтаам',
    ru: 'Некоторые проекты, которые я создал',
    en: 'Some projects I have built',
  },
  // Contact Section
  contact_title: {
    tj: 'Бо ман тамос гиред',
    ru: 'Связаться со мной',
    en: 'Contact Me',
  },
  contact_description: {
    tj: 'Барои ҳамкорӣ ё саволҳо бо ман тамос гиред',
    ru: 'Свяжитесь со мной для сотрудничества или вопросов',
    en: 'Get in touch for collaboration or questions',
  },
  name: {
    tj: 'Ном',
    ru: 'Имя',
    en: 'Name',
  },
  email: {
    tj: 'Почтаи электронӣ',
    ru: 'Электронная почта',
    en: 'Email',
  },
  message: {
    tj: 'Паём',
    ru: 'Сообщение',
    en: 'Message',
  },
  send_message: {
    tj: 'Фиристодани паём',
    ru: 'Отправить сообщение',
    en: 'Send Message',
  },
  // Footer
  address: {
    tj: 'Адрес',
    ru: 'Адрес',
    en: 'Address',
  },
  phone: {
    tj: 'Телефон',
    ru: 'Телефон',
    en: 'Phone',
  },
  social_media: {
    tj: 'Шабакаҳои иҷтимоӣ',
    ru: 'Социальные сети',
    en: 'Social Media',
  },
  rights_reserved: {
    tj: 'Ҳамаи ҳуқуқҳо маҳфузанд',
    ru: 'Все права защищены',
    en: 'All rights reserved',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tj');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
