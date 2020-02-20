import React, { useState } from "react";

interface Item {
  id: number;
  value: number;
}

const HookArray = () => {
  const initialValue: Array<Item> = [];
  const [items, setItems] = useState(initialValue);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };

  return (
    <div>
      <h3>{JSON.stringify(items)}</h3>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookArray;
