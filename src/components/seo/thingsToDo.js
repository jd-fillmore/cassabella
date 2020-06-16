import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../components/seo-pages.scss"

const ThingsToDo = ({ mapSrc, title, text }) => {
  return (
    <Container className="things-to-do">
      <Row>
        <Col lg="12">
          <h2>{title}</h2>
          <iframe
            src={mapSrc}
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
