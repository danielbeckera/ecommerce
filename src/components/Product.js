import React from "react";
import image from "../assets/product.jpg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin-right: 3em;
  min-width: 12%;
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

function Product() {
  return (
    <Container>
      <Image style={{}} src={image} alt="External HD" />
      <div>
        <ItemDescription>
          WD 2TB Elements Portable External Hard Drive - USB 3.0{" "}
        </ItemDescription>
        <ItemPrice>$64</ItemPrice>
      </div>
    </Container>
  );
}

export default Product;
