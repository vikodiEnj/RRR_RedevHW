import { useState } from "react";
import "./App.css";
import ControlsPanel from "./ControlsPanel";
import UserProfile from "./UserProfile";
import Header from "./Header";
import languageContext from "./LanguageContext";
import themeContext from "./ThemeContext";

const languages = ["en", "ru", "de", "es"];

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  return (
    <languageContext.Provider
      value={{
        language: language,
        toggleLanguage: () => {
          const currentIndex = languages.indexOf(language);
          const nextIndex = (currentIndex + 1) % languages.length;
          setLanguage(languages[nextIndex]);
        },
      }}
    >
      <themeContext.Provider
        value={{
          theme: theme,
          toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
        }}
      >
        <div className={`app ${theme}`}>
          <Header />
          <UserProfile />
          <ControlsPanel />
        </div>
      </themeContext.Provider>
    </languageContext.Provider>
  );
}

export default App;
