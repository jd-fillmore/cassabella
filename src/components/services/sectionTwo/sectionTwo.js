import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../sectionTwo/section-two.scss"

import CallOut from "../../callOut/callOut"

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
                text={props.callOutText}
                subText={props.callOutSubText}
                image={props.callOutBtmImage}
                alt={props.callOutBtmImageAlt}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default SectionTwo
