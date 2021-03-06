import React from "react";
import SidebarFilter from "./SidebarFilter";
import ItemsScreen from "./ItemsScreen";
import styled from "styled-components";
import Header from "./Header";

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

function Shop(props) {
  return (
    <Container>
      <Header
        openSearchBar={props.openSearchBar}
        numberItemsCart={props.numberItemsCart}
        getItems={props.getItems}
        loading={props.loading}
        itemsToDisplay={props.itemsToDisplay}
      />
      <FlexContainer>
        <SidebarFilter
          getItems={props.getItems}
          loading={props.loading}
          itemsToDisplay={props.itemsToDisplay}
        />
        <ItemsScreen
          searchBarOpened={props.searchBarOpened}
          arrSearchedItems={props.arrSearchedItems}
          itemSearched={props.itemSearched}
          handleSearch={props.handleSearch}
          handleCloseSnackbar={props.handleCloseSnackbar}
          open={props.open}
          handleAddCart={props.handleAddCart}
          loading={props.loading}
          itemsToDisplay={props.itemsToDisplay}
        />
      </FlexContainer>
    </Container>
  );
}

export default Shop;
