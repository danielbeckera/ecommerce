import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartItemInfo from "./CartItemInfo";
import { ArrowBack } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const BackHomepage = styled.span`
  cursor: pointer;
  color: black;
  font-weight: 600;
`;

const TotalPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

const FlexContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalPriceContainer = styled.div`
  width: 90%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const linkStyle = {
  textDecoration: "none",
};

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);
  const [iteratedCartItems, setIteratedCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Recebe cartItems de props do componente App e adiciona pro estado do proprio componente Cart
  useEffect(() => {
    setCartItems([...props.cartItems]);
  }, [props.cartItems]);

  // Itera os itens do cart e devolve apenas 1 de cada pra ser mostrado no carrinho
  useEffect(() => {
    const iteratedCart = [...new Set(cartItems.map((item) => item))];
    setIteratedCartItems(iteratedCart);
  }, [cartItems]);

  // Usa reduce pra pegar o total de prices de dentro do array cartItems, e seta o estado totalPrice com esse valor, pra ser mostrado no valor total do carrinho
  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const quantity = (id) => {
    const filteredItems = cartItems.filter((item) => item.id === id);
    return filteredItems.length;
  };

  return (
    <Container>
      <Header numberItemsCart={props.numberItemsCart} />
      <FlexContainer>
        <Link to="/" style={linkStyle}>
          <FlexContainer>
            <ArrowBack />
            <BackHomepage>Continuar comprando</BackHomepage>
          </FlexContainer>
        </Link>
        <BackHomepage onClick={props.clearCart}>Limpar Carrinho</BackHomepage>
      </FlexContainer>
      <TotalPriceContainer>
        <span>Valor Total:</span>
        <TotalPrice>R${totalPrice.toFixed(2)}</TotalPrice>
      </TotalPriceContainer>

      {iteratedCartItems.map((item) => {
        return (
          <CartItemInfo
            deleteItemCart={() => props.deleteItemCart(item.id)}
            itensCarrinho={cartItems}
            decreaseItemCart={() => props.decreaseItemCart(item.id)}
            addItemCart={() => props.addItemCart(item.id)}
            quantity={quantity(item.id)}
            image={item.image}
            key={item.id}
            price={item.price}
            title={item.title}
          />
        );
      })}
    </Container>
  );
}

export default Cart;
