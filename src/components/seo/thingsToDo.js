import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../components/seo-pages.scss"

const ThingsToDo = ({ title, text }) => {
  return (
    <Container className="things-to-do">
      <Row>
        <Col lg="12">
          <h2>{title}</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92302.9308732462!2d-79.40297042582884!3d43.70085166738155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc5f55fc8bd1%3A0x8f51a4fd0f97e031!2sEast%20York%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1592060806087!5m2!1sen!2sca"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            title="map"
          ></iframe>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ThingsToDo
