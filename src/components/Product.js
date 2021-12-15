import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { AddCircleOutline } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-right: 3em;
  margin-bottom: 3em;

  @media (min-width: 850px) {
    margin-right: 3em;
    margin-left: 3em;
    width: 26%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  margin-bottom: 2em;
`;

function Product(props) {
  return (
    <Container>
      {props.loading ? (
        <ReactLoading type="spin" color="#d3d3d3" height={50} width={50} />
      ) : (
        <div>
          <Image style={{}} src={props.image} alt="External HD" />
          <InnerContainer>
            <AddCircleOutline onClick={() => props.handleAddCart(props.id)} />
          </InnerContainer>
          <div>
            <ItemDescription>{props.title}</ItemDescription>
            <ItemPrice>${props.price}</ItemPrice>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Product;
