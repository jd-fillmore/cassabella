import React from "react"
import { Container, Row, Col } from "reactstrap"

import HeroBox from "../heroBox/heroBox"
import "../hero/hero.scss"

const Hero = () => (
  <>
    <section id="hero">
      <Container>
        <Row>
          <Col lg="10">
            <HeroBox
              title="Custom Home Renovation Major Addition Company in Etobicoke, Mississauga &amp; Toronto"
              subtitle="Design, Build, Experience The Difference."
              text="Est. 2003 with over 900 thousand ft. of major addition and custom home build /
              Experience"
              link="/projects"
              linkText="View Projects"
              phone="(416) 241 - 3471"
            />
          </Col>
          <Col lg="2">&nbsp;</Col>
        </Row>
      </Container>
    </section>
  </>
)

export default Hero
