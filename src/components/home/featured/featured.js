import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import "../featured/featured.scss"
import "../../imageGallery/image-gallery.scss"

import image from "../../../images/projects/nesbit/1.jpg"
import FeaturedDescription from "../featured/featuredDescription"
import FeaturedOther from "../featured/featuredOther"

const FeaturedHome = () => {
  return (
    <div>
      <section id="featured">
        <Container>
          <Row>
            <Col lg="12">
              <div data-aos="fade-in">
                <img
                  src={image}
                  alt="Custom home renovation in etobicoke, mississauga and toronto"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="5">
              <FeaturedDescription title="Nesbit Drive" />
            </Col>
            <Col lg="7">
              <FeaturedOther
                title="Other projects in Etobicoke, Mississauga &amp; Toronto"
                buttonText="View All"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default FeaturedHome
