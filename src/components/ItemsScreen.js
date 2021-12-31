import React, { useState, useEffect } from "react";
import Product from "./Product";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";
import SearchBar from "material-ui-search-bar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 1em;
`;

function ItemsScreen(props) {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    setItemsToDisplay(props.itemsToDisplay);
  }, [props.itemsToDisplay]);

  return (
    <Wrapper>
      <Wrapper2>
        <SearchInput
          onChange={props.handleSearch}
          type="text"
          placeholder="Buscar..."
        />
        {/* <SearchBar
          value={props.itemSearched}
          onChange={(newValue) => props.itemSearched(newValue)}
          style={{ width: "50%" }}
        /> */}
      </Wrapper2>
      <Container>
        {props.arrSearchedItems.length <= 0
          ? itemsToDisplay.map((item) => {
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
            })
          : props.arrSearchedItems.map((item) => {
              return (
                <Product
                  loading={props.loading}
                  id={item.item.id}
                  title={item.item.title}
                  price={item.item.price}
                  image={item.item.image}
                  handleAddCart={props.handleAddCart}
                />
              );
            })}
        {/* {itemsToDisplay.map((item) => {
          return (
            <Product
              loading={props.loading}
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              handleAddCart={props.handleAddCart}
            />
          );
        })} */}
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
    </Wrapper>
  );
}

export default ItemsScreen;
