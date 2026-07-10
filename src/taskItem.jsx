import React from "react";

const TaskItem = (props) => {
  console.log("TaskItem render:", props);
  return <li>{props.task}</li>;
};

export default React.memo(TaskItem);
