import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import "../featured/featured.scss"
import "../../imageGallery/image-gallery.scss"

import ImageGallery from "react-image-gallery"
import image1 from "../../../images/pic.jpg"
import image2 from "../../../images/pic2.jpg"
import image3 from "../../../images/pic3.jpg"
import FeaturedDescription from "../featured/featuredDescription"
import FeaturedOther from "../featured/featuredOther"

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
]

const FeaturedHome = () => {
  return (
    <div>
      <section id="featured">
        <Container>
          <Row>
            <Col lg="12">
              <div data-aos="fade-in">
                <ImageGallery className="image-gallery" items={images} />
              </div>
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
