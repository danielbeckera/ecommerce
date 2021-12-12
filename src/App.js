import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Shop from "./components/Shop";

const MainContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

function App() {
  return (
    <MainContainer>
      <Header></Header>
      <Shop />
    </MainContainer>
  );
}

export default App;
