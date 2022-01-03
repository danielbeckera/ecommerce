import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IncreaseDecreaseProduct from "./IncreaseDecreaseProduct";
import { DeleteOutline } from "@mui/icons-material";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Remove, Add } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  border: 1px solid #d3d3d3;
  margin-top: 1rem;
`;

const ProductTitle = styled.p`
  text-align: center;
`;

const ProductPrice = styled.p`
  margin: 0;
  margin-bottom: 0;
  font-weight: 500;
`;

const ProductImage = styled.img`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 850px) {
    flex-direction: row;
    width: 25%;
  }
`;

function CartItemInfo(props) {
  const [quantityNumber, setQuantityNumber] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setQuantityNumber(props.quantity);
  }, [props.quantity]);

  const handleAdd = () => {
    props.addItemCart();
    setQuantityNumber((prev) => prev + 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <FlexContainer>
        <ProductImage src={`${props.image}`}></ProductImage>
        <ProductTitleContainer>
          <ProductTitle>{props.title}</ProductTitle>
        </ProductTitleContainer>

        <IncreaseDecreaseProduct
          quantityNumber={quantityNumber}
          handleAdd={handleAdd}
          decreaseItemCart={props.decreaseItemCart}
          quantity={props.quantity}
        />

        <ProductPrice>
          <p>Preço unid.: R${props.price.toFixed(2)}</p>
        </ProductPrice>
        <ProductPrice>{`Total: R$${(props.price * quantityNumber).toFixed(
          2
        )}`}</ProductPrice>
        <IconButton>
          <DeleteOutline onClick={handleClickOpen} />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Deseja deletar o item selecionado?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Ao deletar, o valor total será recalculado.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>CANCELAR</Button>
              <Button onClick={props.deleteItemCart} autoFocus>
                DELETAR
              </Button>
            </DialogActions>
          </Dialog>
        </IconButton>
      </FlexContainer>
    </Container>
  );
}

export default CartItemInfo;
