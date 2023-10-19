import { useState } from "react";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 112px;
  display: flex;
  justify-content: center;
`;

export const Navigation = styled.div`
  width: 77%;
  height: 100%;
`;

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
    setCart([...cart, Item]);
    console.log(cart);
  };

  const Item = {
    name: name,
    count: count,
    price: price * count,
  };

  return (
    <>
      <NavContainer>
        <Navigation></Navigation>
      </NavContainer>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAddToCart}>Add to cart</button>
      <span>{JSON.stringify(cart, null, 2)}</span>
    </>
  );
}
