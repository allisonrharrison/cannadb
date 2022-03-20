import React from "react";
import './App.css'
import Flowers from "./routes/flowers";
import Strains from "./routes/strains";

const App = () => {

  return (
    <div className="app">
      <Flowers />
      <Strains />
    </div>
  )
}

export default App