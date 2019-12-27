import React from "react"
import { Container, Row, Col } from "reactstrap"

import HeroBox from "../heroBox/heroBox"

const Hero = () => (
  <>
    <Container>
      <Row>
        <Col lg="12">
          <HeroBox title="Custom Home Renovation Company in Etobicoke, Mississauga &amp; Toronto" />
        </Col>
      </Row>
    </Container>
  </>
)

export default Hero
