import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import "../featured/featured.scss"

import ImageGallery from "react-image-gallery"
import image1 from "../../../images/pic.jpg"
import FeaturedDescription from "../featured/featuredDescription"
import FeaturedOther from "../featured/featuredOther"

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image1,
    thumbnail: image1,
  },
]

const FeaturedHome = () => {
  return (
    <div>
      <section id="featured">
        <Container>
          <Row>
            <Col lg="12">
              <ImageGallery className="image-gallery" items={images} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="5">
              <FeaturedDescription title="Woodville Ave, Toronto" />
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
