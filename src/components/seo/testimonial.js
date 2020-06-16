import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../components/seo-pages.scss"

const Intro = ({ text, author }) => {
  return (
    <div className="container-fluid testimonial">
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h4>"{text}"</h4>
            <p>- {author}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
