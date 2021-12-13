import React from "react";
import SidebarFilter from "./SidebarFilter";
import ItemsScreen from "./ItemsScreen";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

function Shop() {
  return (
    <Container>
      <Header />
      <FlexContainer>
        <SidebarFilter />
        <ItemsScreen />
      </FlexContainer>
    </Container>
  );
}

export default Shop;
