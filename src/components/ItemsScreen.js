import React, { useState, useEffect } from "react";
import Product from "./Product";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";

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
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            handleAddCart={props.handleAddCart}
          />
        );
      })}
      <Snackbar
        open={props.open}
        autoHideDuration={1500}
        onClose={props.handleCloseSnackbar}
      >
        <Alert
          onClose={props.handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%", backgroundColor: "#357a38", color: "white" }}
        >
          Item adicionado ao carrinho!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ItemsScreen;
