import React from "react";

const List = ({ array, func }) => {
  return (
    <ul>
      {array.map((item, index) => {
        return (
          <li key={index} value={index}>
            {item} <button onClick={() => func(index)}> Клик</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
