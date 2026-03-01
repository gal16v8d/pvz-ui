import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from './en/translation.json';
import spanish from './es/translation.json';
import chinese from './zh/translation.json';
import japanese from './ja/translation.json';

const resources = {
  en: { translation: english },
  es: { translation: spanish },
  zh: { translation: chinese },
  ja: { translation: japanese },
};

void i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources,
  });

export default i18next;
