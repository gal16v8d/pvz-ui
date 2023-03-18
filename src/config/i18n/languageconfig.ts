import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from './en/translation.json';
import spanish from './es/translation.json';

const resources = {
  en: { translation: english },
  es: { translation: spanish },
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
