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
  color: black;
  display: flex;
  justify-content: space-between;
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
      <Header numberItemsCart={props.numberItemsCart} />
      <FlexContainer>
        <Link to="/" style={linkStyle}>
          <FlexContainer>
            <ArrowBack />
            <BackHomepage>Voltar à loja</BackHomepage>
          </FlexContainer>
        </Link>
        <BackHomepage onClick={props.clearCart}>Limpar Carrinho</BackHomepage>
      </FlexContainer>

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
