import { useState } from "react";

export function ProductPage() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
    </>
  );
}
