import { useState } from "react";
import "./App.css";
import CustomProps from "./CustomProps";

function App() {
  return (
    <>
      <CustomProps title={"chłopaki"} hi={"Cześć"} />
      <CustomProps title={"developers"} hi={"Hello"} />
    </>
  );
}

export default App;
