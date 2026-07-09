import React, { useMemo } from "react";

const ItemList = ({ items, search }) => {
  console.log("ItemList rerendered");
  const filtered = useMemo(() => {
    return items.filter((item) => {
      return item.name.includes(search);
    });
  }, [items, search]);
  return (
    <ul className="item-list">
      {filtered.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default React.memo(ItemList);
