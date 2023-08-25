import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; //public/locales/{lang}/translation

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({                            // init(options , callback)
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapevalue: false          
        }
});

export default i18n;