import React from "react"
import { Container, Row, Col } from "reactstrap"
import ContactForm from "../contact/contactForm"

import "../../components/seo-pages.scss"

const CTA = ({ title }) => {
  return (
    <section id="cta">
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h2>{title}</h2>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CTA
