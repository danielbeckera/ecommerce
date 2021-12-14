import React, { useState, useEffect } from "react";
import image from "../assets/product.jpg";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 12%;
  margin-right: 3em;

  @media (min-width: 850px) {
    margin-right: 3em;
    width: 26%;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
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
      {props.loading ? (
        <ReactLoading type="cubes" color="#d3d3d3" height={50} width={50} />
      ) : null}
      <Image style={{}} src={props.image} alt="External HD" />
      <div>
        <ItemDescription>{props.title}</ItemDescription>
        <ItemPrice>${props.price}</ItemPrice>
      </div>
    </Container>
  );
}

export default Product;
