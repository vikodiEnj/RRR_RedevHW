import React from "react";

const CartItem = (props) => {
  console.log("CartItem render:", props.pos.title);
  return (
    <div className="card goods-basket">
      <h3>
        {props.pos.title} "(Кол-во: {props.pos.count})"{" "}
        <button
          className="button"
          onClick={() => props.onIncrement(props.pos.id)}
        >
          +1
        </button>
        <button className="button" onClick={() => props.onRemove(props.pos.id)}>
          Удалить
        </button>
      </h3>
    </div>
  );
};

export default React.memo(CartItem);
