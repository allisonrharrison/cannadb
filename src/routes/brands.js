import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import '../App.css'

const Brands = () => {
  const [brands, setBrands] = useState([])

  const fetchData = () => {
    fetch("https://api.otreeba.com/v1/brands")
      .then(response => {
        return response.json()
      })
      .then(brands => {
        setBrands(brands.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Brands</h1>
      <div className="wrapper">
      {brands.map(brand => (
        <Card key={brand.ocpc}>
          <div className="card-img-wrapper" style={{ backgroundImage:  `url('${brand.image}')` }}>
          </div>
          <CardBody>
            <CardTitle><h2>{brand.name}</h2></CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default Brands