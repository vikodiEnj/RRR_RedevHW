import React, { useMemo } from "react";
import withRenderTracker from "./WithRenderTracker";

const CounterButton = ({ count, increment }) => {
  console.log("CounterButton rerendered");
  console.log("---------------");
  return (
    <button className="counter-button" onClick={increment}>
      Clicked {count} times
    </button>
  );
};

export default React.memo(withRenderTracker(CounterButton));
