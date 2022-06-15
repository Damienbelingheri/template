import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './translations';

export default i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        lng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });
