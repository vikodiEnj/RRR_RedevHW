import { useContext } from "react";
import themeContext from "./ThemeContext";
import languageContext from "./LanguageContext";

const ControlsPanel = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  const { language, toggleLanguage } = useContext(languageContext);
  return (
    <div className="controls">
      <button onClick={() => toggleTheme()}>Тема</button>
      <button onClick={() => toggleLanguage()}>Язык</button>
    </div>
  );
};

export default ControlsPanel;
