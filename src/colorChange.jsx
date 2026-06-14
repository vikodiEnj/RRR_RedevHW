import { useState } from "react";

const ColorChange = ({}) => {
  const [state, setState] = useState(0);

  return (
    <div className="box">
      <h1 style={{ color: state }}>Текст, меняющий цвет</h1>
      <button
        className="button"
        onClick={() =>
          setState(
            "#" +
              Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0"),
          )
        }
      >
        Кнопка
      </button>
    </div>
  );
};

export default ColorChange;
