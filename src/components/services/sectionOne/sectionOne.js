import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../sectionOne/section-one.scss"

import CallOut from "../../../components/callOut/callOut"
import topImage from "../../../images/home-renovation/home-reno.jpg"
import WhyUs from "../whyUs/whyUs"

const SectionOne = props => {
  return (
    <div>
      <section id="section-one">
        <Container>
          {/* Row 1 */}
          <Row>
            <Col lg="5">
              <CallOut
                text="Top Quality Renovation Services"
                subText="We create a home that is safe and custom designed to meet your style and requirements"
                image={topImage}
                alt="top quality renovation services"
              />
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <h4>{props.heading}</h4>
              <p>{props.text}</p>
              <WhyUs />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default SectionOne
