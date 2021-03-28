import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

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
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/cassabellaconstruction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://twitter.com/FernandoD2018"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com/company/cass-a-bella-construction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <p>cass-a-bella-construction.com</p>
                <a href="tel:(416) 241 - 3471">(416) 241 - 3471</a>
              </div>
            </Col>
            <Col lg="6">
              <div className="flex-two">
                <p>
                  <a href="https://infused.agency">Niagara web design</a> by
                  Infused Agency
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
