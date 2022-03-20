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
      <Flowers />
      <Strains />
      <SeedCompanies />
      <Brands />
      <Extracts />
      <Edibles />
      <Products />
    </div>
  )
}

export default App