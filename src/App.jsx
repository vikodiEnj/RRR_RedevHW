import "./App.css";
import myContext from "./ThemeContext";
import CustomProps from "./CustomProps";
import { useState } from "react";

 function App() {
  const [state, setState] = useState("Light");

  return (
    <myContext.Provider
      value={{
        theme: state,
        toggle: () => setState(state === "Light" ? "Dark" : "Light"),
      }}
    >
      <div className={`app ${state === "Dark" ? "dark" : "light"}`}>
        <CustomProps />
      </div>
    </myContext.Provider>
  );
}

export default App;
