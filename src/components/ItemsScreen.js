import React, { useState, useEffect } from "react";
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

function ItemsScreen(props) {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    setItemsToDisplay(props.itemsToDisplay);
  }, [props.itemsToDisplay]);

  return (
    <Container>
      {itemsToDisplay.map((item) => {
        return (
          <Product
            loading={props.loading}
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </Container>
  );
}

export default ItemsScreen;
