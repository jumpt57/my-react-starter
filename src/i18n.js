import Backend from "i18next-xhr-backend";
import {initReactI18next} from "react-i18next";
import i18n from "i18next";

export default i18n.use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "/locales/{{lng}}.json"
        },
        lng: "en",
        fallbackLng: 'en',
        debug: false,
        react: {
            wait: true,
        },
    });