import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import HomePage from "./pages/Home";
import Navbar from "./components/layout/navbar";
import PostProductPage from "./pages/Product";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/Cart";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:id" element={<PostProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
