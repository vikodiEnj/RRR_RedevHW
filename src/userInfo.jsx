import React from "react";

const UserInfo = (props) => {
  console.log("UserInfo render");
  return (
    <h1>
      Имя: {props.user.name} | Возраст: {props.user.age} | Активен:{" "}
      {props.user.isActive ? "Да" : "Нет"}
    </h1>
  );
};

export default React.memo(UserInfo);
