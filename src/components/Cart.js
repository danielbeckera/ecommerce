import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([...props.cartItems, props.cartItems]);
    console.log(cartItems);
  }, [props.cartItems, cartItems]);

  return (
    <Container>
      <Header />
      <Link to="/">
        <span>Back to homepage</span>
      </Link>
      {cartItems.map((item) => {
        return <h1>{item.title}</h1>;
      })}
    </Container>
  );
}

export default Cart;
