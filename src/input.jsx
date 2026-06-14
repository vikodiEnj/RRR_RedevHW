import { useState } from "react";

const Input = ({string}) => {
  const [state, setState] = useState(`${string}`);

  return (
    <div className="box">
      <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
      <h1>State: {state}</h1>
    </div>
  );
};

export default Input;
