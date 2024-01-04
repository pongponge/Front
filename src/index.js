import React from 'react';
import ReactDOM from 'react-dom/client';
import '@template/css/bootstrap.min.css';
import '@template/css/style.css';
import '@template/lib/owlcarousel/assets/owl.carousel.min.css';
import '@template/lib/lightbox/css/lightbox.min.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
