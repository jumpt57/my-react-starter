import i18n from "i18next";

export const LANGUAGES = {
    "EN": {
        code: "en",
        flag: "images/flags/english-flag.png"
    }
};

export const DEFAULT_LANG = "EN";

export const changeLanguage = (language) => i18n.changeLanguage(LANGUAGES[language].code);
