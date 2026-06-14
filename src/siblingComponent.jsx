import { useState } from "react";

const SiblingComponent = ({ text }) => {
  const [state, setState] = useState(text);
  return (
    <>
      <h1>Текущий текст: {state} </h1>
      <button className="button" onClick={() => setState("REDEV")}>
        Заменить текст
      </button>
    </>
  );
};

export default SiblingComponent;
