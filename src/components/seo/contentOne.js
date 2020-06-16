import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../components/seo-pages.scss"

const ContentOne = ({ titleOne, textOne, titleTwo, textTwo }) => {
  return (
    <Container className="pd-80">
      <Row>
        <Col lg="6">
          <h4>{titleOne}</h4>
          <p>{textOne}</p>
        </Col>
        <Col lg="6">
          <h4>{titleTwo}</h4>
          <p>{textTwo}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ContentOne
