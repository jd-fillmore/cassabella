import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import "../footer/footer.scss"

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col lg="6">
              <div className="d-flex">
                <a
                  href="https://www.facebook.com/Cass-A-Bella-Construction-146591322568396/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <p>cass-a-bella-construction.com</p>
                <a href="tel:(416) 241 - 3471">(416) 241 - 3471</a>
              </div>
            </Col>
            <Col lg="6">
              <div className="flex-two">
                <p>
                  Powered by
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://infused.agency"
                  >
                    &nbsp;Infused Agency
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
