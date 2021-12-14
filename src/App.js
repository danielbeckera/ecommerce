import React from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Shop />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
