import React from "react";
import './App.css'
import { Link } from "react-router-dom";
import Flower from "./routes/flower";
import Strains from "./routes/strains";
import SeedCompanies from "./routes/seed-companies";
import Brands from "./routes/brands";
import Extracts from "./routes/extracts";
import Edibles from "./routes/edibles";
import Products from "./routes/products";

const Home = () => {

  return (
    <div className="app">
      <h1>CannaDB</h1>
      <div className="wrapper">
        <Link to='/flower'>
        <div className="tile">
          <h2>Flower</h2>
        </div>
        </Link>
        <Link to='/extracts'>
        <div className="tile">
          <h2>Extracts</h2>
        </div>
        </Link>
        <Link to='/edibles'>
        <div className="tile">
          <h2>Edibles</h2>
        </div>
        </Link>
        <Link to='/products'>
        <div className="tile">
          <h2>Products</h2>
        </div>
        </Link>
        <Link to='/seeds'>
        <div className="tile">
          <h2>Seeds</h2>
        </div>
        </Link>
        <Link to='/brands'>
        <div className="tile">
          <h2>Brands</h2>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Home