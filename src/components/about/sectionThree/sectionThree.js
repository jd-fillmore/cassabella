import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../sectionThree/section-three.scss"

const SectionThree = () => {
  const aboutContent = {
    mainTitle: "Cass-A-Bella Construction Guarantee",
    rightTitle: "Why do we offer this Guarantee?",
    rightText:
      "We believe the home owner needs to feel confident when dealing with the home builder at all times. At Cass-A-Bella Consruction, we will undertake the home construction project from start to end while providing the home owner an open door of communication during the entire design and construction phases. Cass-A-Bella Construction is a Tarion Home builder and our construction management experience allows us to raise home building to a higher standard with expert project management, planning, scheduling and budgeting. We look forward to building your dream home or adding more living space to your existing home.",
  }
  return (
    <div>
      <section id="section-three">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>{aboutContent.mainTitle}</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h4>{aboutContent.leftTitle}</h4>
              <p>{aboutContent.leftText}</p>
            </Col>
            <Col lg="6">
              <h4>{aboutContent.rightTitle}</h4>
              <p>{aboutContent.rightText}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default SectionThree
