import { useCallback, useState } from "react";
import CartItem from "./cartItem";

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

  const handleIncrement = useCallback((id) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  }, []);
  const handleRemove = useCallback((id) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
  }, []);
  return (
    <>
      {cart.map((pos) => (
        <CartItem
          key={pos.id}
          pos={pos}
          onIncrement={handleIncrement}
          onRemove={handleRemove}
        />
      ))}
      <button className="button" onClick={() => setCart([])}>
        Очистить корзину
      </button>
    </>
  );
};

export default GoodsBusket;
