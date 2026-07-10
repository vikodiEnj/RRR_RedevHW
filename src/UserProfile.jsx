import { useContext } from "react";
import translations from "./translations";
import themeContext from "./ThemeContext";
import languageContext from "./LanguageContext";

const UserProfile = () => {
  const { language } = useContext(languageContext);
  const { theme } = useContext(themeContext);
  return (
    <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
      <h3> {translations[language].profile}</h3>
    </div>
  );
};

export default UserProfile;
