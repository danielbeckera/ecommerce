import React from "react";
import { Remove, Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function IncreaseDecreaseProduct(props) {
  return (
    <div>
      <IconButton
        disabled={props.quantityNumber <= 1}
        onClick={props.decreaseItemCart}
      >
        <Remove />
      </IconButton>
      {props.quantityNumber}
      <IconButton onClick={props.handleAdd}>
        <Add />
      </IconButton>
    </div>
  );
}

export default IncreaseDecreaseProduct;
