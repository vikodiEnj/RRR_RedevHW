import React from "react";
import { useContext } from "react";
import myContext from "./ThemeContext";

const CustomProps = () => {
  const context = useContext(myContext);
  return (
    <div className={`card ${context.theme === "Dark" ? "dark" : "light"}`}>
      <div className="icon" />
      <h1>Dark / Light</h1>
      <h3>Toggle dark or light to customize your interface</h3>
      <button
        className={`toggle ${context.theme === "Dark" ? "dark" : "light"}`}
        onClick={() => context.toggle()}
        aria-label="Переключить тему"
      />
    </div>
  );
};

export default CustomProps;
