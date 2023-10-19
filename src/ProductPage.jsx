import { useState } from "react";

export function ProductPage() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const price = 125;

  const name = "sneakers";

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(Item)
  }

  const Item = {
    name: name,
    count: count,
    price: price * count,
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAddToCart}>Add to cart</button>
      <span></span>
    </>
  );
}
