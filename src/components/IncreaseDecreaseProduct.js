import React, { useState, useEffect } from "react";
import { Remove, Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function IncreaseDecreaseProduct(props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.quantity);
  }, [props.quantity]);

  const handleAdd = () => {
    setQuantity((prevState) => prevState + 1);
  };

  return (
    <div>
      <IconButton>
        <Remove />
      </IconButton>
      {quantity}
      <IconButton onClick={handleAdd}>
        <Add />
      </IconButton>
    </div>
  );
}

export default IncreaseDecreaseProduct;
