import React from "react";
import SidebarFilter from "./SidebarFilter";
import ItemsScreen from "./ItemsScreen";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function Shop() {
  return (
    <Container>
      <SidebarFilter />
      <ItemsScreen />
    </Container>
  );
}

export default Shop;
