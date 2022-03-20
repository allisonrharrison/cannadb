import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import '../App.css'

const Extracts = () => {
  const [extracts, setExtracts] = useState([])

  const fetchData = () => {
    fetch("https://api.otreeba.com/v1/extracts")
      .then(response => {
        return response.json()
      })
      .then(extracts => {
        setExtracts(extracts.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Extracts</h1>
      <div className="wrapper">
      {extracts.map(extract => (
        <Card key={extract.ocpc}>
          <div className="card-img-wrapper" style={{ backgroundImage:  `url('${extract.image}')` }}>
          </div>
          <CardBody>
            <CardTitle><h2>{extract.name}</h2></CardTitle>
            <CardSubtitle>{extract.brand.name}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default Extracts