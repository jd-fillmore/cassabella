import React from "react"
import { Container, Row, Col } from "reactstrap"
import ImageGallery from "react-image-gallery"
import image1 from "../../images/projects/woodville/1.jpg"
import image2 from "../../images/projects/woodville/2.jpg"
import image3 from "../../images/projects/woodville/3.jpg"
import image4 from "../../images/projects/woodville/4.jpg"
import image5 from "../../images/projects/woodville/5.jpg"
import image6 from "../../images/projects/woodville/6.jpg"

const ProjectDescription = props => {
  const projectItems = props.projectItems
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
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },
    {
      original: image6,
      thumbnail: image6,
    },
  ]
  return (
    <div>
      <section id="project-area">
        <Container>
          <Row>
            <Col lg="12">
              <ImageGallery items={images} />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h2>{props.projectTitle}</h2>
            </Col>
            <Col lg="6">
              <ul>
                {projectItems.map(items => (
                  <li>{items}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ProjectDescription
