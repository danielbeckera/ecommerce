import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartItemDescription from "./CartItemInfo";
import { ArrowBack } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const BackHomepage = styled.span`
  cursor: pointer;
  color: black;
  font-weight: 600;
`;

const TotalPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

const FlexContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalPriceContainer = styled.div`
  width: 90%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const linkStyle = {
  textDecoration: "none",
};

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItems([...props.cartItems]);
  }, [props.cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <Container>
      <Header numberItemsCart={props.numberItemsCart} />
      <FlexContainer>
        <Link to="/" style={linkStyle}>
          <FlexContainer>
            <ArrowBack />
            <BackHomepage>Continuar comprando</BackHomepage>
          </FlexContainer>
        </Link>
        <BackHomepage onClick={props.clearCart}>Limpar Carrinho</BackHomepage>
      </FlexContainer>
      <TotalPriceContainer>
        <span>Valor Total:</span>
        <TotalPrice>${totalPrice}</TotalPrice>
      </TotalPriceContainer>

      {cartItems.map((item) => {
        return (
          <CartItemDescription
            image={item.image}
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
