import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import '../App.css'

const Products = () => {
  const [products, setProducts] = useState([])

  const fetchData = () => {
    fetch("https://api.otreeba.com/v1/products")
      .then(response => {
        return response.json()
      })
      .then(products => {
        setProducts(products.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Products</h1>
      <div className="wrapper">
      {products.map(product => (
        <Card key={product.ocpc}>
          <div className="card-img-wrapper" style={{ backgroundImage:  `url('${product.image}')` }}>
          </div>
          <CardBody>
            <CardTitle><h2>{product.name}</h2></CardTitle>
            <CardSubtitle>{product.brand.name}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default Products