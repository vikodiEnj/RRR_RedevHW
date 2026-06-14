import { useState } from "react";

const Counter = ({}) => {
  const [state, setState] = useState(0);

  return (
    <div className="box">
      <h1>Счетчик: {state}</h1>
      <button
        className="button"
        onClick={() => setState((oldState) => oldState + 1)}
      >
        Кнопка
      </button>
    </div>
  );
};

export default Counter;
