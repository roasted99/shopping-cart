import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from './RouteSwitch'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouteSwitch />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

