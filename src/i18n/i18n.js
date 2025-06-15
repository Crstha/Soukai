import i18 from "i18next";
import { initReactI18next } from "react-i18next";

import en from './en.json';
import jp from './jp.json';

i18.use(initReactI18next).init({
    resources:{
        en:{translation : en},
        jp:{translation : jp},

    },
    lng:'en',
    fallbackLng:'en',
    interpolation:{escapeValue:false},


})

export default i18;