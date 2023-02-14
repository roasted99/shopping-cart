import { Routes, Route } from "react-router-dom";
import About from "./components/About"
import Shop from "./components/Shop"
import Contact from "./components/Contact"

import './App.css'
import CheckOut from "./components/CheckOut";
import ItemDetail from "./components/ItemDetail";

const RouteSwitch = () => {

  return (
    <div>
    
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/shop/:id" element={<ItemDetail />} />
        
        <Route path="/contact" element={<Contact />} />

      </Routes>
    
    </div>
  );
};

export default RouteSwitch;