import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  border: 1px solid #d3d3d3;
  margin-top: 1rem;
`;

const ProductTitle = styled.p`
  margin-left: 1rem;
`;

const ProductPrice = styled.p`
  margin-right: 3rem;
  font-weight: 500;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function CartItemDescription(props) {
  return (
    <Container>
      <FlexContainer>
        <ProductTitle>{props.title}</ProductTitle>
        <ProductPrice>{`$${props.price}`}</ProductPrice>
      </FlexContainer>
    </Container>
  );
}

export default CartItemDescription;
