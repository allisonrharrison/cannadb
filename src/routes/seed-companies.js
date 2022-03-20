import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import '../App.css'

const SeedCompanies = () => {
  const [seedCompanies, setSeedCompanies] = useState([])

  const fetchData = () => {
    fetch("https://api.otreeba.com/v1/seed-companies")
      .then(response => {
        return response.json()
      })
      .then(seedCompanies => {
        setSeedCompanies(seedCompanies.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Seed Companies</h1>
      <div className="wrapper">
      {seedCompanies.map(seedCompany => (
        <Card key={seedCompany.ocpc}>
          <div className="card-img-wrapper" style={{ backgroundImage:  `url('${seedCompany.image}')` }}>
          </div>
          <CardBody>
            <CardTitle><h2>{seedCompany.name}</h2></CardTitle>
            <CardText>{seedCompany.description}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default SeedCompanies