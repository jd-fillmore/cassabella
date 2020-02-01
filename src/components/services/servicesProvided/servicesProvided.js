import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../../components/inner/inner.scss"
import "../servicesProvided/services-provided.scss"

const ServicesProvided = () => {
  const servicesWeProvide = [
    "Design",
    "Project consultation",
    "Financial/Planning Assistance",
    "Major Renovations",
    "Home Improvements",
    "Additions – first, second or rear",
    "Garages",
    "Basements",
    "Kitchens",
    "Bathrooms",
    "Porticos",
    "Custom Homes",
    "Home Renovations",
  ]
  const drawings = [
    "Working drawings",
    "Heat loss/gain drawings",
    "Engineering drawings",
    "Water management drawings",
    "Design drawings",
    "City plan drawings",
    "Survey drawings",
  ]
  const contract = [
    "Fully detailed",
    "Time frames",
    "Payment plan",
    "Fixed costing",
  ]
  const consulting = [
    "Discuss design",
    "Project aesthetics",
    "Budget requirements",
    "Family space planning",
  ]
  const construction = [
    "OBC standards",
    "High quality workmanship",
    "Licensed tradesmen",
    "Quality materials",
    "Built on time",
  ]
  const cityIssues = [
    "Zoning examination",
    "Preliminary process review application",
    "Committee of adjustment representation",
    "Permit application",
    "Building inspections",
    "Electrical inspections",
  ]
  return (
    <div>
      <section id="services-provided">
        <Container>
          <Row>
            <Col lg="4">
              <h4>Services We Provide</h4>
              <ul>
                {servicesWeProvide.map(services => (
                  <li>{services}</li>
                ))}
              </ul>
            </Col>
            <Col lg="4">
              <h4>Drawings</h4>
              <ul>
                {drawings.map(drawing => (
                  <li>{drawing}</li>
                ))}
              </ul>
            </Col>
            <Col lg="4">
              <h4>Contract</h4>
              <ul>
                {contract.map(cont => (
                  <li>{cont}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row id="two">
            <Col lg="4">
              <h4>Consulting</h4>
              <ul>
                {consulting.map(consult => (
                  <li>{consult}</li>
                ))}
              </ul>
            </Col>
            <Col lg="4">
              <h4>Construction</h4>
              <ul>
                {construction.map(construct => (
                  <li>{construct}</li>
                ))}
              </ul>
            </Col>
            <Col lg="4">
              <h4>City Issues / Permits</h4>
              <ul>
                {cityIssues.map(city => (
                  <li>{city}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ServicesProvided
