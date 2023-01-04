import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import engTranslate from './en/translation.json';
import rusTranslate from './ru/translation.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en-US', 'ru-RU'],
    resources: {
      en: { translation: engTranslate },
      ru: { translation: rusTranslate },
    },
  });

export default i18next;
