import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Home";
import TopicPage from "./TopicPage";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <Routes>
      <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
      <Route path="/:id" element={<TopicPage />} />
    </Routes>
  );
}

export default App;
