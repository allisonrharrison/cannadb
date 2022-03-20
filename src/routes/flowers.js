import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import '../App.css'

const Flowers = () => {
  const [flowers, setFlowers] = useState([])

  const fetchData = () => {
    fetch("https://api.otreeba.com/v1/flowers")
      .then(response => {
        return response.json()
      })
      .then(flowers => {
        setFlowers(flowers.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Flowers</h1>
      <div className="wrapper">
      {flowers.map(flower => (
        <Card key={flower.ocpc}>
          <div className="card-img-wrapper" style={{ backgroundImage:  `url('${flower.image}')` }}>
          </div>
          <CardBody>
            <CardTitle><h2>{flower.strain.name}</h2></CardTitle>
            <CardSubtitle>{flower.brand.name}</CardSubtitle>
            <CardText>{flower.description}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default Flowers