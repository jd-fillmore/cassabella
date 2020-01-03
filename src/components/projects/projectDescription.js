import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../button/button"
import ImageGallery from "react-image-gallery"

import "../projects/project-description.scss"

const ProjectDescription = props => {
  const projectItems = props.projectItems

  return (
    <div>
      <Container>
        <Row>
          <Col lg="12">
            <ImageGallery items={props.images} />
          </Col>
        </Row>
        <section id="project-area">
          <Row>
            <Col lg="6">
              <h2>{props.projectTitle}</h2>
              <ul>
                {projectItems.map(items => (
                  <li>{items}</li>
                ))}
              </ul>
            </Col>
            <Col lg="6">
              <Link to="/projects">
                <Button className="secondary">View More Projects</Button>
              </Link>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  )
}

export default ProjectDescription
