import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"

import Card from "../../card/card"
import imageOne from "../../../images/custom-home-additions-toronto.jpg"
import imageTwo from "../../../images/custom-second-floor-additions-misssauga.jpg"
import imageThree from "../../../images/custom-rear-home-additions-etobicoke.jpg"

const Services = props => {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card
              image={imageOne}
              alt="Custom Home Additions Toronto"
              title="Home Additions"
              text="With years of experience, our skilled builders provide excellent advice and project management."
            />
          </Col>
          <Col lg="4">
            <Card
              image={imageTwo}
              alt="Custom Second Floor Additions Mississauga"
              title="Second Floor Additions"
              text="Our team is careful to match the external aesthetics of the addition to the rest of your home."
            />
          </Col>
          <Col lg="4">
            <Card
              image={imageThree}
              alt="Custom Rear Home Additions Etobicoke"
              title="Rear Home Additions"
              text="We design custom upholstered furniture and bring your outdated pieces back to life."
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col lg="12">
            <Link to="/services">
              <Button className="secondary" aria-label="View All">
                View All
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services
