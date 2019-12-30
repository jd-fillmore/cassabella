import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col lg="6">
              <div className="flex">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <p>cass-a-bella-construction.com</p>
                <a href="tel:(416) 241 - 3471">(416) 241 - 3471</a>
              </div>
            </Col>
            <Col lg="6">
              <div className="flex-two">
                <p>
                  Web design, development &amp; SEO by
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://infused.agency"
                  >
                    Infused Agency
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
