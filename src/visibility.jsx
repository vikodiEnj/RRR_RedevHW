import { useState } from "react";

const Visibility = ({}) => {
  const [state1, setState1] = useState(true);

  return (
    <div className="box">
      {state1 ? <h1>Текст для скрытия</h1> : ""}
      <button className="button" onClick={() => setState1((state1) => !state1)}>
        Показать/скрыть текст
      </button>
    </div>
  );
};

export default Visibility;
