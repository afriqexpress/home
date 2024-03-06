
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

const resources = {
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', // Default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
