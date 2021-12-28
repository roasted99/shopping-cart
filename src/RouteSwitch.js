import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About"
import Nav from "./components/Nav";
import Shop from "./components/Shop"
import Contact from "./components/Contact"

import './App.css'
import CheckOut from "./components/CheckOut";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckOut />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;