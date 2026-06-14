import { useState } from "react";
import ChildComponent from "./childComponent";
import SiblingComponent from "./siblingComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        className="button"
        onClick={() => setCounter((oldCounter) => oldCounter + 1)}
      >
        Увеличить
      </button>
      <button className="button" onClick={() => setCounter(0)}>
        Сбросить
      </button>
      <button
        className="button"
        onClick={() => setCounter(Math.floor(Math.random() * 10) + 1)}
      >
        Случайное значение
      </button>
      <button
        className="button"
        onClick={() =>
          setCounter((oldCounter) =>
            oldCounter > 0 ? oldCounter - 1 : oldCounter,
          )
        }
      >
        Уменьшить
      </button>
      <ChildComponent name="Georg" counter={counter} />
      <SiblingComponent text="Текст для примера" />
    </>
  );
};

export default ParentComponent;
