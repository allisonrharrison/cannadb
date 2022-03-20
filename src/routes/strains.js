import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import '../App.css'

const Strains = () => {
  const [strains, setFlowers] = useState([])

  const fetchData = () => {
    fetch("https://api.otreeba.com/v1/strains")
      .then(response => {
        return response.json()
      })
      .then(strains => {
        setFlowers(strains.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Strains</h1>
      <div className="strains">
      {strains.map(strain => (
        <Card key={strain.ocpc}>
          <div className="card-img-wrapper" style={{ backgroundImage:  `url('${strain.image}')` }}>
          </div>
          <CardBody>
            <CardTitle><h2>{strain.name}</h2></CardTitle>
            <CardSubtitle>{strain.seedCompany.name}</CardSubtitle>
            <CardText>{strain.genetics.names}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default Strains