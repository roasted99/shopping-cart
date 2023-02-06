import React from 'react';
import './App.css';
import About from "./components/About"
import Nav from './components/Nav';
import CartProvider from './CartContext';


const App = () => {
  return (
    <CartProvider>
      <div>
        <Nav />
        <About />
     </div>
    </CartProvider>
  );
};

export default App;
