import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import AliceCarousel from "react-alice-carousel"

import "./vida-moderna-project.scss"
import "react-alice-carousel/lib/alice-carousel.css"

const VidaModernaProject = ({ title, items, link }) => {
  return (
    <>
      <div className="vida-moderna-project">
        <Container>
          <Row>
            <Col lg="12">
              <h2>{title}</h2>
              <AliceCarousel mouseTracking items={items} />
              <Link to={link} target="_blank">
                <button>View PDF Details</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default VidaModernaProject
