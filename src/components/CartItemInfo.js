import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IncreaseDecreaseProduct from "./IncreaseDecreaseProduct";

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

const ProductImage = styled.img`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function CartItemInfo(props) {
  const [quantityNumber, setQuantityNumber] = useState(0);

  useEffect(() => {
    setQuantityNumber(props.quantity);
  }, [props.quantity]);

  const handleAdd = () => {
    props.test();
    setQuantityNumber((prev) => prev + 1);
  };

  const handleRemove = () => {
    setQuantityNumber((prev) => prev - 1);
  };

  return (
    <Container>
      <FlexContainer>
        <ProductImage src={`${props.image}`}></ProductImage>
        <ProductTitle>{props.title}</ProductTitle>
        <h5>
          <IncreaseDecreaseProduct
            quantityNumber={quantityNumber}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            quantity={props.quantity}
          />
        </h5>
        <ProductPrice>{`$${props.price * quantityNumber}`}</ProductPrice>
      </FlexContainer>
    </Container>
  );
}

export default CartItemInfo;
