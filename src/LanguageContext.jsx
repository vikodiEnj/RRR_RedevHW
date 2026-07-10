import { createContext } from "react";

const languageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

export default languageContext;
