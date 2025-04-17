import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json'; // Arabic translations

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: Localization.locale.split('-')[0], // default based on device (e.g. 'en' or 'fr')
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar }, // Arabic fallback to French
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
