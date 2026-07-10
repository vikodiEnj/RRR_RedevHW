import { useState } from "react";
import TaskItem from "./taskItem";

const newTasks = ["Сделать д/з", "Сверстать сайт", "Купить цветы"];

const TaskList = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  return (
    <div className="card task-list">
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
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
    </div>
  );
};

export default TaskList;
