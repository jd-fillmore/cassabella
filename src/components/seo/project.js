import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../../components/button/button"

const Project = ({
  mainImage,
  altTag,
  projectItems,
  projectTitle,
  projectLink,
  secondTitle,
}) => {
  return (
    <Container id="project">
      <Row>
        <Col lg="12">
          <img src={mainImage} alt={altTag} />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <h2>{projectTitle}</h2>
          <ul>
            {projectItems.map(items => (
              <li>{items}</li>
            ))}
          </ul>
          <Link to={projectLink}>
            <Button className="one">View Project</Button>
          </Link>
        </Col>
        <Col lg="6">
          <h3>{secondTitle}</h3>
          <Link to="/projects">
            <Button className="secondary" aria-label="View All">
              View All Projects
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Project
