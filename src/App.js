import React, { useState, useEffect } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";

function App() {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numberItemsCart, setNumberItemsCart] = useState();
  const [open, setOpen] = useState(false);
  const [itemSearched, setItemSearched] = useState("");
  const [arrSearchedItems, setArrSearchedItems] = useState([]);
  const [searchBarOpened, setSearchBarOpened] = useState(false);

  const fuse = new Fuse(itemsToDisplay, {
    keys: ["title"],
    includeScore: true,
    includeMatches: false,
    distance: 100,
  });

  useEffect(() => {
    const results = fuse.search(itemSearched);
    setArrSearchedItems(results);
  }, [itemSearched]);

  const handleSearch = (event) => {
    setItemSearched(event.target.value);
  };

  const openSearchBar = () => {
    setSearchBarOpened(!searchBarOpened);
  };

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

  // get all items and render on screen
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then(function (response) {
        setItemsToDisplay(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  }, []);

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

  const decreaseItemCart = (id) => {
    let itensCarrinhoAssigned = cartItems;
    const item = cartItems.indexOf(cartItems.find((item) => item.id === id));
    if (item > -1) {
      itensCarrinhoAssigned.splice(item, 1);
    }
    setCartItems([...itensCarrinhoAssigned]);
  };

  const deleteItemCart = (id) => {
    const item = cartItems.filter((item) => item.id !== id);
    setCartItems(item);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Shop
            openSearchBar={openSearchBar}
            handleSearch={handleSearch}
            handleCloseSnackbar={handleCloseSnackbar}
            handleAddCart={handleAddCart}
            getItems={getItems}
            searchBarOpened={searchBarOpened}
            arrSearchedItems={arrSearchedItems}
            itemSearched={itemSearched}
            open={open}
            numberItemsCart={numberItemsCart}
            itemsToDisplay={itemsToDisplay}
            loading={loading}
          />
        }
      />
      <Route
        exact
        path="/cart"
        element={
          <Cart
            deleteItemCart={deleteItemCart}
            decreaseItemCart={decreaseItemCart}
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
