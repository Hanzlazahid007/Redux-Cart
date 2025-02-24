import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
