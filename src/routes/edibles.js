import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import '../App.css'

const Edibles = () => {
  const [edibles, setEdibles] = useState([])

  const fetchData = () => {
    fetch("https://api.otreeba.com/v1/edibles")
      .then(response => {
        return response.json()
      })
      .then(edibles => {
        setEdibles(edibles.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Edibles</h1>
      <div className="wrapper">
      {edibles.map(edible => (
        <Card key={edible.ocpc}>
          <div className="card-img-wrapper" style={{ backgroundImage:  `url('${edible.image}')` }}>
          </div>
          <CardBody>
            <CardTitle><h2>{edible.name}</h2></CardTitle>
            <CardSubtitle>{edible.brand.name}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default Edibles