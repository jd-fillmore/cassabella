import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Button from "../button/button"

import "../footer/cta.scss"

const CTA = () => {
  return (
    <div>
      <section id="cta">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2 data-aos="fade-down">
                Have a home renovation project in mind?
              </h2>
              <div data-aos="fade-up">
                <Link to="/contact">
                  <Button>Get A Quote</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default CTA
