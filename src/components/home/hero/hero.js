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
              title="Custom Home Renovation Company in Etobicoke, Mississauga &amp; Toronto"
              subtitle="The art of design, build and renovate."
              text="15 years of professional art, design and build experience. Let
              Cass-A-Bella Construction show you how to transform your home into an
              art sculpture."
              link="/projects"
              linkText="View Projects"
            />
          </Col>
          <Col lg="2">&nbsp;</Col>
        </Row>
      </Container>
    </section>
  </>
)

export default Hero
