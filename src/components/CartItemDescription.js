import React from "react";
import styled from "styled-components";
import { Box, Grid, Item } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: space-around;
  margin: 0 auto;
  width: 80%;
  border: 1px solid #d3d3d3;
  margin-top: 1rem;
`;

const ProductTitle = styled.p`
  margin-left: 1rem;
`;

function CartItemDescription(props) {
  return (
    <Container>
      <ProductTitle>{props.title}</ProductTitle>
      <p>{props.price}</p>
    </Container>
  );
}

export default CartItemDescription;
