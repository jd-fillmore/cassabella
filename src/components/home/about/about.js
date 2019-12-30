import React from "react"
import { Container, Row, Col } from "reactstrap"
import aboutImage from "../../../images/about.jpg"

const About = props => {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h2>{props.title}</h2>
            <p className="subtitle">{props.subtitle}</p>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <img src={aboutImage} alt={props.alt} />
          </Col>
          <Col lg="6">
            <p>
              Our team proudly uses state-of-the-art material and technology,
              and approaches each job with years of industry knowledge and
              expertise. As such, we are recognized as a fully licensed and
              insured company.
              <br />
              <br />
              With over 40 years design and building experience, our founders,
              Fernando Duarte and Charles Sciberras, have the technical
              abilities to outperform other contractors, be it through custom
              design work, efficient project management or cost-effective
              building solutions.
              <br />
              <br />
              Moreover, we are covered by five million dollars in liability
              insurance for all aspects of construction, including:
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
