import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Products from "./Pages/Products";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
