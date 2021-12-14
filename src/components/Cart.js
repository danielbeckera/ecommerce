import React from "react";
import Header from "./Header";
import styled from "styled-components";

import { Routes, Route, Outlet, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

function Cart() {
  return (
    <Container>
      <Header />
      <Link to="/">
        <span>Back to homepage</span>
      </Link>
      <h1>this is a cart</h1>
    </Container>
  );
}

export default Cart;
