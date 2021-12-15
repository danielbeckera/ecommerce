import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartItemDescription from "./CartItemDescription";
import { ArrowBack } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const BackHomepage = styled.span`
  color: black;
  font-weight: 600;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const linkStyle = {
  textDecoration: "none",
};

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([...props.cartItems]);
  }, [props.cartItems]);

  return (
    <Container>
      <Header />
      <Link to="/" style={linkStyle}>
        <FlexContainer>
          <BackHomepage>
            <ArrowBack />
            Back to Store
          </BackHomepage>
        </FlexContainer>
      </Link>
      {cartItems.map((item) => {
        return (
          <CartItemDescription
            key={item.id}
            price={item.price}
            title={item.title}
          />
        );
      })}
    </Container>
  );
}

export default Cart;
