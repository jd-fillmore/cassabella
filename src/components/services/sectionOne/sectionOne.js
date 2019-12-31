import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../sectionOne/section-one.scss"

import CallOut from "../../../components/callOut/callOut"
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
                text={props.callOutText}
                subText={props.callOutSubText}
                image={props.callOutTopImage}
                alt={props.callOutTopImageAlt}
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
