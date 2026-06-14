import { useState } from "react";
const GoodsBusket = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
    { id: 3, title: "Худи", count: 1 },
    { id: 4, title: "Носки", count: 1 },
    { id: 5, title: "Трусы", count: 1 },
    { id: 6, title: "Перчатки", count: 1 },
    { id: 7, title: "Сандали", count: 1 },
  ]);
  return (
    <>
      {cart.map((pos) => (
        <h3 key={pos.id}>
          {pos.title} "(Кол-во: {pos.count})"{" "}
          <button
            className="button"
            onClick={() =>
              setCart((oldCart) =>
                oldCart.map((item) =>
                  item.id === pos.id
                    ? { ...item, count: item.count + 1 }
                    : item,
                ),
              )
            }
          >
            +1
          </button>
          <button
            className="button"
            onClick={() =>
              setCart((oldCart) => oldCart.filter((item) => item.id !== pos.id))
            }
          >
            Удалить
          </button>
        </h3>
      ))}
      <button className="button" onClick={() => setCart((oldCart) => [])}>
        Очистить корзину
      </button>
    </>
  );
};

export default GoodsBusket;
