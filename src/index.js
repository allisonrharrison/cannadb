import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Flower from './routes/flower';
import Extracts from './routes/extracts';
import Edibles from './routes/edibles';
import Products from './routes/products';
import SeedCompanies from './routes/seed-companies';
import Brands from './routes/brands';
import Layout from './layout/layout';
import { HashRouter } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
    <Routes>
    <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="flower" element={<Flower />}></Route>
        <Route path="extracts" element={<Extracts />}></Route>
        <Route path="edibles" element={<Edibles />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="seeds" element={<SeedCompanies />}></Route>
        <Route path="brands" element={<Brands />}></Route>
      </Route>
      </Routes>
      </HashRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
