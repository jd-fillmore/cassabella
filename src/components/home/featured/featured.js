import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"

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
      <Container>
        <Row>
          <Col lg="12">
            <ImageGallery items={images} />
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
    </div>
  )
}

export default FeaturedHome
