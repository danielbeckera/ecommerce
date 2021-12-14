import React, { useState } from "react";
import SidebarFilter from "./SidebarFilter";
import ItemsScreen from "./ItemsScreen";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

function Shop() {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = (category) => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then(function (response) {
        setItemsToDisplay(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  };
  return (
    <Container>
      <Header
        getItems={getItems}
        loading={loading}
        itemsToDisplay={itemsToDisplay}
      />
      <FlexContainer>
        <SidebarFilter
          getItems={getItems}
          loading={loading}
          itemsToDisplay={itemsToDisplay}
        />
        <ItemsScreen loading={loading} itemsToDisplay={itemsToDisplay} />
      </FlexContainer>
    </Container>
  );
}

export default Shop;
