import React from "react";
import './App.css'
import Flowers from "./routes/flowers";
import Strains from "./routes/strains";
import SeedCompanies from "./routes/seed-companies";
import Brands from "./routes/brands";
import Extracts from "./routes/extracts";
import Edibles from "./routes/edibles";
import Products from "./routes/products";

const App = () => {

  return (
    <div className="app">
      <h1>CannaDB</h1>
      <div className="wrapper">
        <div className="tile">
          <h2>Flower</h2>
        </div>
        <div className="tile">
          <h2>Extracts</h2>
        </div>
        <div className="tile">
          <h2>Edibles</h2>
        </div>
        <div className="tile">
          <h2>Products</h2>
        </div>
        <div className="tile">
          <h2>Seeds</h2>
        </div>
        <div className="tile">
          <h2>Brands</h2>
        </div>
      </div>
    </div>
  )
}

export default App