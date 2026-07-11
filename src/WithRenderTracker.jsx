import { useRef } from "react";

const withRenderTracker = (WrapCOMP) => {
  return (props) => {
    const countRef = useRef(0);
    countRef.current += 1;
    console.log(
      `Компонент ${WrapCOMP.name} рендерился ${countRef.current} раз`,
    );
    return <WrapCOMP {...props} />;
  };
};

export default withRenderTracker;
