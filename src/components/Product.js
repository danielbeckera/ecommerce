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

function Product() {
  return (
    <Container>
      <Image style={{}} src={image} alt="External HD" />
      <div>
        <p style={{ margin: 0 }}>
          WD 2TB Elements Portable External Hard Drive - USB 3.0{" "}
        </p>
        <p style={{ margin: 0, marginBottom: "2em" }}>$64</p>
      </div>
    </Container>
  );
}

export default Product;
