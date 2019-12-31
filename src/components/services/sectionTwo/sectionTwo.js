import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../sectionTwo/section-two.scss"

import CallOut from "../../callOut/callOut"
import btmImage from "../../../images/home-renovation/home-reno2.jpg"

const SectionTwo = props => {
  return (
    <div>
      <section id="section-two">
        <Container>
          {/* Row 2 */}
          <Row>
            <Col lg="6">
              <h4>{props.heading}</h4>
              <p>{props.text}</p>
            </Col>
            <Col lg={{ size: 5, offset: 1 }}>
              <CallOut
                text="Excellent Workmanship"
                subText="We create a home that is safe and custom designed to meet your style and requirements"
                image={btmImage}
                alt="excellent workmanship"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default SectionTwo
