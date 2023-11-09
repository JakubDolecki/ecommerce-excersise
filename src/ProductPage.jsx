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
  border-bottom: 1px;
  border-bottom: solid;
  border-color: rgba(232, 231, 235, 255);
  display: flex;
`;

export const Logo = styled.img`
  margin-top: 37px;
  height: 21px;
`;

export const Links = styled.div`
  height: 100%;
  justify-content: space-between;
  width: 400px;
  margin-left: 56px;
  display: flex;
`;

export const LeftSection = styled.div`
  display: flex;
`;

export const RightSection = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
`;

export const Profile = styled.div`
  justify-content: space-between;
  height: 100%;
  width: 120px;
  display: flex;
`;

export const Link = styled.span`
  margin-top: 38px;
  font-family: Kumbh Sans;
  color: hsl(219, 9%, 45%);
`;

export const Cart = styled.img`
  height: 21px;
  margin-top: 38px;
`;

export const ProfilePic = styled.img`
  height: 45px;
  margin-top: 27px;
  margin-right: 3px;
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
     const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].count += count;
      newCart[existingItemIndex].price += price * count;
      setCart(newCart);
      setCount(0);
    } else {
      const Item = {
        name: name,
        count: count,
        price: price * count,
      };
      setCart([...cart, Item]);
      setCount(0);
    }
  };

  return (
    <>
      <NavContainer>
        <Navigation>
          <LeftSection>
            <Logo src="src/assets/logo.svg" />
            <Links>
              <Link>Collections</Link>
              <Link>Men</Link>
              <Link>Women</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </Links>
          </LeftSection>
          <RightSection>
            <Profile>
              <Cart src="src/assets/icon-cart.svg" />
              <ProfilePic src="src/assets/image-avatar.png" />
            </Profile>
          </RightSection>
        </Navigation>
      </NavContainer>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAddToCart}>Add to cart</button>
      <span>{JSON.stringify(cart, null, 2)}</span>
    </>
  );
}
