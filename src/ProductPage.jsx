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
  &:hover {
    cursor: pointer;
  }
`;

export const Cart = styled.img`
  height: 21px;
  margin-top: 38px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfilePic = styled.img`
  height: 45px;
  margin-top: 27px;
  margin-right: 3px;
  &:hover {
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  width: 99vw;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  width: 1020px;
  height: 570px;
  display: flex;
  justify-content: space-between;
`;

export const PicturesContainer = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BigImg = styled.img`
  height: 445px;
  border-radius: 20px;
`;

export const Thumbnails = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Thumbnail = styled.img`
  height: 90px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  width: 445px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const InnerContainer = styled.div`
  height: 425px;
  width: 100%;
`;

export const CountButtons = styled.div`
  width: 155px;
  height: 57px;
  background-color: hsl(223, 64%, 98%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  font-family: Kumbh Sans;
  font-weight: 700;
`

export const CountButton = styled.button`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 50px;
  font-family: Kumbh Sans;
  font-weight: 700;
  font-size: 25px;
  color: orange;
  padding-bottom: 7px;
  &:hover {
    cursor: pointer;
  }
`

export function ProductPage() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [imgSrc, setImgSrc] = useState("src/assets/image-product-1.jpg");

  const handleClick = (e) => {
    setImgSrc(e.target.src);
    console.log(imgSrc);
  };

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
    const existingItemIndex = cart.findIndex((item) => item.name === name);

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
      <MainContainer>
        <ProductContainer>
          <PicturesContainer>
            <BigImg src={imgSrc}></BigImg>
            <Thumbnails>
              <Thumbnail
                onClick={handleClick}
                src="src/assets/image-product-1.jpg"
              />
              <Thumbnail
                onClick={handleClick}
                src="src/assets/image-product-2.jpg"
              />
              <Thumbnail
                onClick={handleClick}
                src="src/assets/image-product-3.jpg"
              />
              <Thumbnail
                onClick={handleClick}
                src="src/assets/image-product-4.jpg"
              />
            </Thumbnails>
          </PicturesContainer>
          <InfoContainer>
            <InnerContainer>
              <CountButtons>
                <CountButton onClick={handleSubtract}>-</CountButton>
                <span>{count}</span>
                <CountButton onClick={handleAdd}>+</CountButton>
              </CountButtons>
              {/* <span>{JSON.stringify(cart, null, 2)}</span> */}
              <button onClick={handleAddToCart}>Add to cart</button>
            </InnerContainer>
          </InfoContainer>
        </ProductContainer>
      </MainContainer>
    </>
  );
}
