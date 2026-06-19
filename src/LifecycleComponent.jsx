import { useState, useEffect } from "react";

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://todo-redev.onrender.com/api/todos", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoic3R1ZGVudEB0ZXN0LmNvbSIsImlhdCI6MTc4MTgwNzYyNywiZXhwIjoxNzgyNDEyNDI3fQ.icc_zqE48BJfJYCDcbeCUsMkEGBBM7C0rGWmvqJw77c",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log("ComponentDidMount");
    return () => {
      console.log("Компонент будет размонтирован");
    };
  }, []);

  useEffect(() => {
    console.log({ count });
    if (count % 2 === 0) {
      console.log("shouldComponentUpdate");
    }
  }, [count]);

  return (
    <div>
      <p>LifecycleComponent</p>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
};

export default LifecycleComponent;
