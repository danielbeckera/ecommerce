import React from "react";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

function ItemsScreen() {
  return (
    <Container>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Container>
  );
}

export default ItemsScreen;
