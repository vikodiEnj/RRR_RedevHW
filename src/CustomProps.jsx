import React from "react";

const CustomProps = ({ title, hi }) => {
  return (
    <h1>
      {hi}, {title}
    </h1>
  );
};

export default CustomProps;
