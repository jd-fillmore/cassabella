import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../components/seo-pages.scss"

const ContentTwo = ({ titleOne, textOne, titleTwo, textTwo }) => {
  return (
    <div className="grey-bg">
      <Container>
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
    </div>
  )
}

export default ContentTwo
