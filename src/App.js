import React, { useState } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const getItems = (category) => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then(function (response) {
        setItemsToDisplay(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  };

  const handleAddCart = (id) => {
    // const itemProCart = [...itemsToDisplay].filter((item) => item.id === id);
    itemsToDisplay.map((item) => {
      if (id === item.id) {
        setCartItems([...cartItems, item]);
      }
    });
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Shop
            itemsToDisplay={itemsToDisplay}
            handleAddCart={handleAddCart}
            getItems={getItems}
            loading={loading}
          />
        }
      />
      <Route exact path="/cart" element={<Cart cartItems={cartItems} />} />
    </Routes>
  );
}

export default App;
