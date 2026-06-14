import { useState } from "react";
import "./App.css";
import Number from "./number";
import String from "./string";
import Boolean from "./boolean";
import Function from "./function";
import Object from "./object";
import Array from "./array";

function App() {
  return (
    <>
      <Number number={5} />
      <String string={"string"} />
      <Boolean boolean={true} />
      <Function func={() => 34 * 243} />
      <Object object={{ fullName: "Georg" }} />
      <Array array={[1, 2, 3, 4, 5]} />
    </>
  );
}

export default App;
