import React, { useState, useEffect } from "react";
import image from "../assets/product.jpg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 12%;
  margin-right: 3em;

  @media (min-width: 850px) {
    margin-right: 3em;
    width: 25%;
  }
`;

const Image = styled.img`
  width: 18%;
  min-width: 150px;
  max-width: 350px;
`;

const ItemDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  margin: 0;
  margin-bottom: 2em;
`;

function Product(props) {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   setItems(props.itemsToDisplay);
  // }, [props.itemsToDisplay]);

  return (
    <Container>
      <Image style={{}} src={props.image} alt="External HD" />
      <div>
        <ItemDescription>{props.title}</ItemDescription>
        <ItemPrice>${props.price}</ItemPrice>
      </div>
    </Container>
  );
}

export default Product;
