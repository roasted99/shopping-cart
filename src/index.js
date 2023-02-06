import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from './RouteSwitch'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
    <RouteSwitch />
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

