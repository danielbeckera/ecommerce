import React, { useState, useEffect } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numberItemsCart, setNumberItemsCart] = useState();
  const [open, setOpen] = useState(false);

  const getItems = (category) => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then(function (response) {
        setItemsToDisplay(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  };

  useEffect(() => {
    setNumberItemsCart(cartItems.length);
  }, [cartItems]);

  const handleAddCart = (id) => {
    itemsToDisplay.map((item) => {
      if (id === item.id) {
        setCartItems([...cartItems, item]);
        setOpen(true);
      }
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addItemCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setCartItems([...cartItems, item]);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Shop
            handleCloseSnackbar={handleCloseSnackbar}
            open={open}
            numberItemsCart={numberItemsCart}
            itemsToDisplay={itemsToDisplay}
            handleAddCart={handleAddCart}
            getItems={getItems}
            loading={loading}
          />
        }
      />
      <Route
        exact
        path="/cart"
        element={
          <Cart
            addItemCart={addItemCart}
            clearCart={clearCart}
            numberItemsCart={numberItemsCart}
            cartItems={cartItems}
          />
        }
      />
    </Routes>
  );
}

export default App;
