import React from "react"
import InnerHeroBox from "../inner/innerHeroBox"
import { Container, Row, Col } from "reactstrap"

import "../inner/inner-hero.scss"

const InnerHero = props => {
  return (
    <div>
      <section id="inner-hero">
        <Container>
          <Row className="text-center">
            <Col lg="2">&nbsp;</Col>
            <Col lg="8">
              <InnerHeroBox title={props.title} />
            </Col>
            <Col lg="2">&nbsp;</Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default InnerHero
