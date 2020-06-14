import React from "react"
import { Container, Row, Col } from "reactstrap"
import ContactForm from "../contact/contactForm"

import "../../components/seo-pages.scss"

const Intro = ({ title, paragraphOne, paragraphTwo }) => {
  return (
    <Container className="pd-80">
      <Row>
        <Col lg="6">
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </Col>
        <Col lg="6">
          <p>
            Please fill out the form and we will get back to you as soon as
            possible.
          </p>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Intro
