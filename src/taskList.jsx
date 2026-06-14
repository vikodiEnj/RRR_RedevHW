import { useState } from "react";

const newTasks = ["Сделать д/з", "Сверстать сайт", "Купить цветы"];

const TaskList = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

return (
  <>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
    <button
      className="button"
      onClick={() =>
        setTasks((oldTasks) => [
          ...oldTasks,
          newTasks[Math.floor(Math.random() * newTasks.length)],
        ])
      }
    >
      Добавить задачу
    </button>
    <button
      className="button"
      onClick={() => setTasks((oldTasks) => oldTasks.slice(0, -1))}
    >
      Удалить последнюю задачу
    </button>
  </>
);
};

export default TaskList;
