import { useContext } from "react";
import translations from "./translations";
import themeContext from "./ThemeContext";
import languageContext from "./LanguageContext";

const Header = () => {
  const { language } = useContext(languageContext);
  const { theme } = useContext(themeContext);
  return (
    <header className={`card ${theme}`}>
      <h1> {translations[language].welcome}</h1>
    </header>
  );
};

export default Header;
