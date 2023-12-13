import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import "./ProductPage.css";

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
    color: black;
    border-bottom: solid;
    border-width: 5px;
    border-color: #ff7d1b;
    font-weight: 700;
  }
`;

export const Cart = styled.img`
  height: 21px;
  margin-top: 30px;
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
    border-style: solid;
    border-width: 2px;
    border-color: #ff7d1b;
    border-radius: 50%;
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
  cursor: pointer;
`;

export const Thumbnails = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-weight: 700;
  letter-spacing: 1px;
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
`;

export const CountButton = styled.button`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 50px;
  font-family: Kumbh Sans;
  font-weight: 700;
  font-size: 25px;
  color: #ff7d1b;
  padding-bottom: 7px;
  &:hover {
    cursor: pointer;
    color: #f7a363;
  }
`;

export const AddButton = styled.button`
  width: 270px;
  height: 57px;
  border: none;
  background-color: #ff7d1b;
  border-radius: 10px;
  font-family: Kumbh Sans;
  color: white;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 1px 30px 25px -15px rgba(255, 125, 0, 0.55);
  margin-left: 15px;
  &:hover {
    cursor: pointer;
    background-color: #f7a363;
  }
`;

export const ButtonIcon = styled.img`
  fill: white;
  margin-right: 12px;
  height: 15px;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Title = styled.span`
  font-family: Kumbh Sans;
  color: #ff7d1b;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.span`
  font-family: Kumbh Sans;
  font-weight: 700;
  font-size: 45px;
  line-height: 50px;
  margin-bottom: 40px;
`;

export const Paragraph = styled.span`
  font-family: Kumbh Sans;
  color: hsl(219, 9%, 45%);
  font-weight: 400;
  letter-spacing: normal;
  line-height: 25px;
  margin-bottom: 25px;
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;
  height: 60px;
  margin-bottom: 30px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Number = styled.span`
  font-family: Kumbh Sans;
  font-size: 25px;
  font-weight: 700;
  margin-right: 17px;
`;

export const Discount = styled.div`
  width: 50px;
  height: 25px;
  font-family: Kumbh Sans;
  background-color: #fdefe3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff7d1b;
  border-radius: 5px;
`;

export const Crossed = styled.span`
  text-decoration: line-through;
  font-family: Kumbh Sans;
  color: hsl(220, 14%, 75%);
`;

export const CartWindow = styled.div`
  position: fixed;
  background-color: white;
  height: 265px;
  width: 350px;
  left: 69.7%;
  top: 105px;
  border-radius: 15px;
  box-shadow: -1px 47px 74px -29px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 47px 74px -29px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 47px 74px -29px rgba(0, 0, 0, 0.31);
  display: flex;
  flex-direction: column;
`;

export const CartTxt = styled.span`
  font-family: Kumbh Sans;
  font-weight: 700;
  font-size: 20px;
  margin-top: 25px;
  margin-left: 25px;
  margin-bottom: 25px;
`;

export const Line = styled.div`
  height: 1px;
  width: 350px;
  background-color: hsl(220, 14%, 75%);
`;

export const Product = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const InnerProduct = styled.div`
  width: 315px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImg = styled.img`
  height: 100%;
  border-radius: 5px;
`;

export const ProductTxt = styled.div`
  height: 100%;
  width: 213px;
  display: flex;
  flex-direction: column;
`;

export const DeleteImg = styled.img`
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductName = styled.span`
  font-family: Kumbh Sans;
  color: hsl(219, 9%, 45%);
  margin-bottom: 3px;
  margin-top: 3px;
`;

export const ProductBottom = styled.div`
  display: flex;
`;

export const ProductCount = styled.span`
  font-family: Kumbh Sans;
  color: hsl(219, 9%, 45%);
`;

export const ProductPrice = styled.span`
  font-family: Kumbh Sans;
  font-weight: 700;
  margin-left: 5px;
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;

export const CheckoutButton = styled.button`
  width: 315px;
  height: 100%;
  font-family: Kumbh Sans;
  border: none;
  background-color: #ff7d1b;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  margin-top: 30px;
`;

export const Notification = styled.div`
  font-family: Kumbh Sans;
  background-color: hsl(26, 100%, 55%);
  height: 10px;
  width: 15px;
  color: white;
  font-weight: 700;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
  position: relative;
  top: 38px;
  left: 10px;
`;

export const Placeholder = styled.div`
  background-color: transparent;
  height: 10px;
  width: 15px;
  border-radius: 75px;
  position: relative;
  top: 38px;
  left: 10px;
`;

export const CartIcon = styled.div``;

export const Thumbnail = styled.div`
  height: 95px;
  width: 95px;
  background-color: hsl(26, 100%, 55%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GalleryBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  z-index: 10;
  opacity: 0.7;
`;

export const Gallery = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GalleryContainer = styled.div`
  /* position: relative; */
`;

export const BigImgGallery = styled.img`
  height: 560px;
  margin-bottom: 40px;
  border-radius: 20px;
`;

export const PicturesContainerGallery = styled.div`
  width: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbnailsGallery = styled.div`
  height: 90px;
  width: 480px;
  display: flex;
  justify-content: space-between;
`;

export const CloseGallery = styled.img`
  fill: white;
`;

export function ProductPage() {
  const img1 = "src/assets/image-product-1.jpg";
  const img2 = "src/assets/image-product-2.jpg";
  const img3 = "src/assets/image-product-3.jpg";
  const img4 = "src/assets/image-product-4.jpg";

  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [imgSrc, setImgSrc] = useState(img1);
  const [showDiv, setShowDiv] = useState(false);
  const [notification, setNotification] = useState(0);
  const [showNoti, setShowNoti] = useState(false);
  const [activeThumbnail, setActiveThumbnail] = useState(img1);
  const [showGallery, setShowGallery] = useState(false);

  const activeStyle = {
    height: "90px",
    opacity: "0.35",
    borderRadius: "10%",
    cursor: "pointer",
  };

  const InActiveStyle = {
    height: "90px",
    borderRadius: "10%",
    cursor: "pointer",
  };

  const activeBorder = {
    height: "90px",
    width: "90px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: "3px",
    borderColor: "hsl(26, 100%, 55%)",
    borderRadius: "13%",
  };

  const InActiveBorder = {
    height: "90px",
    width: "90px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "none",
    marginTop: "3px",
    borderWidth: "3px",
    borderColor: "white",
    borderRadius: "13%",
  };

  useEffect(() => {
    handleNotification();
    let itemCount = cart.map((obj) => obj.count);
    let countString = itemCount.join(", ");
    setNotification(countString);
  }, [cart]);

  const handleClick = (e) => {
    const newImgSrc = e.target.src;
    setImgSrc(newImgSrc);
    setActiveThumbnail(newImgSrc);
  };

  const handleNotification = () => {
    if (cart.length === 0) {
      setShowNoti(false);
    } else {
      setShowNoti(true);
    }
  };

  const price = 125.0;

  const name = "Fall Limited Edition Sneakers";

  const photo = "src/assets/image-product-1.jpg";

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handleCart = () => {
    if (showDiv == false) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  const handleGallery = () => {
    if (showDiv == false) {
      setShowGallery(true);
    } else {
      setShowGallery(false);
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
      console.log(cart);
    } else {
      const Item = {
        name: name,
        count: count,
        price: price * count,
        photo: photo,
      };
      setCart([...cart, Item]);
      setCount(0);
      console.log(cart);
    }
  };

  const handleRemove = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  return (
    <>
      {showGallery && (
        <GalleryContainer>
          <Gallery>
            <PicturesContainerGallery>
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" className="closesvg">
                <path
                  className="close"
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#ffffff"
                  fill-rule="evenodd"
                  onClick={() => {
                    setShowGallery(false);
                  }}
                />
              </svg>
              <BigImgGallery
                src={imgSrc}
                onClick={handleGallery}
              ></BigImgGallery>
              <ThumbnailsGallery>
                <div
                  style={
                    activeThumbnail.includes(img1)
                      ? activeBorder
                      : InActiveBorder
                  }
                >
                  <img
                    className="thumb"
                    key={img1}
                    onClick={handleClick}
                    src={img1}
                    style={
                      activeThumbnail.includes(img1)
                        ? activeStyle
                        : InActiveStyle
                    }
                  />
                </div>
                <div
                  style={
                    activeThumbnail.includes(img2)
                      ? activeBorder
                      : InActiveBorder
                  }
                >
                  <img
                    className="thumb"
                    key={img2}
                    onClick={handleClick}
                    src={img2}
                    style={
                      activeThumbnail.includes(img2)
                        ? activeStyle
                        : InActiveStyle
                    }
                  />
                </div>
                <div
                  style={
                    activeThumbnail.includes(img3)
                      ? activeBorder
                      : InActiveBorder
                  }
                >
                  <img
                    className="thumb"
                    key={img3}
                    onClick={handleClick}
                    src={img3}
                    style={
                      activeThumbnail.includes(img3)
                        ? activeStyle
                        : InActiveStyle
                    }
                  />
                </div>
                <div
                  style={
                    activeThumbnail.includes(img4)
                      ? activeBorder
                      : InActiveBorder
                  }
                >
                  <img
                    className="thumb"
                    key={img4}
                    onClick={handleClick}
                    src={img4}
                    style={
                      activeThumbnail.includes(img4)
                        ? activeStyle
                        : InActiveStyle
                    }
                  />
                </div>
              </ThumbnailsGallery>
            </PicturesContainerGallery>
          </Gallery>
          <GalleryBg> </GalleryBg>
        </GalleryContainer>
      )}
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
              <CartIcon>
                {showNoti ? (
                  <Notification>{notification}</Notification>
                ) : (
                  <Placeholder></Placeholder>
                )}
                <Cart onClick={handleCart} src="src/assets/icon-cart.svg" />
              </CartIcon>
              <ProfilePic src="src/assets/image-avatar.png" />
            </Profile>
          </RightSection>
        </Navigation>
      </NavContainer>
      {showDiv && (
        <CartWindow>
          <CartTxt>Cart</CartTxt>
          <Line></Line>
          {cart.map((item) => (
            <Product>
              <InnerProduct>
                <ProductImg src={item.photo}></ProductImg>
                <ProductTxt>
                  <ProductName>{item.name}</ProductName>
                  <ProductBottom>
                    <ProductCount>
                      ${price} x {item.count}
                    </ProductCount>
                    <ProductPrice>${item.price}</ProductPrice>
                  </ProductBottom>
                </ProductTxt>
                <DeleteImg
                  onClick={() => handleRemove(item.name)}
                  src="src/assets/icon-delete.svg"
                ></DeleteImg>
              </InnerProduct>
            </Product>
          ))}
          <CheckoutContainer>
            <CheckoutButton>Checkout</CheckoutButton>
          </CheckoutContainer>
        </CartWindow>
      )}
      <MainContainer>
        <ProductContainer>
          <PicturesContainer>
            <BigImg src={imgSrc} onClick={handleGallery}></BigImg>
            <Thumbnails>
              <div
                style={
                  activeThumbnail.includes(img1) ? activeBorder : InActiveBorder
                }
              >
                <img
                  className="thumb"
                  key={img1}
                  onClick={handleClick}
                  src={img1}
                  style={
                    activeThumbnail.includes(img1) ? activeStyle : InActiveStyle
                  }
                />
              </div>
              <div
                style={
                  activeThumbnail.includes(img2) ? activeBorder : InActiveBorder
                }
              >
                <img
                  className="thumb"
                  key={img2}
                  onClick={handleClick}
                  src={img2}
                  style={
                    activeThumbnail.includes(img2) ? activeStyle : InActiveStyle
                  }
                />
              </div>
              <div
                style={
                  activeThumbnail.includes(img3) ? activeBorder : InActiveBorder
                }
              >
                <img
                  className="thumb"
                  key={img3}
                  onClick={handleClick}
                  src={img3}
                  style={
                    activeThumbnail.includes(img3) ? activeStyle : InActiveStyle
                  }
                />
              </div>
              <div
                style={
                  activeThumbnail.includes(img4) ? activeBorder : InActiveBorder
                }
              >
                <img
                  className="thumb"
                  key={img4}
                  onClick={handleClick}
                  src={img4}
                  style={
                    activeThumbnail.includes(img4) ? activeStyle : InActiveStyle
                  }
                />
              </div>
            </Thumbnails>
          </PicturesContainer>
          <InfoContainer>
            <InnerContainer>
              <Title>SNEAKER COMPANY</Title>
              <Subtitle>Fall Limited Edition Sneakers</Subtitle>
              <Paragraph>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </Paragraph>
              <PriceSection>
                <Price>
                  <Number>$125.00</Number>
                  <Discount>50%</Discount>
                </Price>
                <Crossed>$250.00</Crossed>
              </PriceSection>
              <Buttons>
                <CountButtons>
                  <CountButton onClick={handleSubtract}>-</CountButton>
                  <span>{count}</span>
                  <CountButton onClick={handleAdd}>+</CountButton>
                </CountButtons>
                <AddButton onClick={handleAddToCart}>
                  <ButtonIcon src="src/assets/cart-white.svg"></ButtonIcon>
                  Add to cart
                </AddButton>
              </Buttons>
            </InnerContainer>
          </InfoContainer>
        </ProductContainer>
      </MainContainer>
    </>
  );
}
