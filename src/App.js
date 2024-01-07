import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import HomePage from "./pages/Home";
import Navbar from "./components/layout/navbar";
import PostProductPage from "./pages/Product";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:id" element={< PostProductPage />} />
          <Route path="/contact" element={< ContactPage />} />
          <Route path="/cart" element={< CartPage />} />
          <Route path="/checkout" element={< CheckoutSuccess />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
