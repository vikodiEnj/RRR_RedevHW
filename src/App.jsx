import "./App.css";
import List from "./List.jsx";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const [state, setState] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");
  const handleUpdate = (index) => {
    setState(
      state.map((item, i) => {
        return index === i ? "!!!" + item : item;
      }),
    );
  };
  const handleChange = (e) => {
    if (e.key === "Enter") {
      setState([...state, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <List array={state} func={handleUpdate} />
      <button onClick={() => inputRef.current.focus()} className="focus-btn">
        Фокус
      </button>
      <input
        value={inputValue}
        ref={inputRef}
        onKeyDown={handleChange}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}

export default App;
