import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es_ec from './es-ecuador.json';
import es_ve from './es-venezuela.json';
import es_ar from './es-argentina.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'es_ec',
    fallbackLng: 'es_ec',
    resources: {
        es_ec,
        es_ve,
        es_ar
    },
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;