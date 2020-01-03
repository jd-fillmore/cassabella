import React from "react"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import Card from "../components/card/card"

import imageOne from "../images/projects/nesbit.jpg"
import imageTwo from "../images/projects/tangemere.jpg"
import imageThree from "../images/projects/anthony.jpg"
import imageFour from "../images/projects/lord.jpg"
import imageFive from "../images/projects/burwood.jpg"
import imageSix from "../images/projects/gwendolen.jpg"
import imageSeven from "../images/projects/mckee.jpg"
import imageEight from "../images/projects/woodville.jpg"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <Nav />
    <InnerHero title="Projects" />
    <section id="main-content" className="projects">
      <Container>
        {/* Row 1 */}
        <Row>
          <Col lg="4">
            <Card
              cardLink="/nesbit-drive"
              image={imageOne}
              alt="Nesbit Drive"
              title="Nesbit Drive"
            />
          </Col>
          <Col lg="4">
            <Card
              cardLink="/tangemere-road"
              image={imageTwo}
              alt="Tangemere Road"
              title="Tangemere Road"
            />
          </Col>
          <Col lg="4">
            <Card
              cardLink="/anthony-road"
              image={imageThree}
              alt="Anthony Road"
              title="Anthony Road"
            />
          </Col>
        </Row>
        {/* Row 2 */}
        <Row className="two">
          <Col lg="4">
            <Card
              cardLink="/lord-seaton-road"
              image={imageFour}
              alt="Lord Seaton Road"
              title="Lord Seaton Road"
            />
          </Col>
          <Col lg="4">
            <Card
              cardLink="/burwood-road"
              image={imageFive}
              alt="Burwood Road"
              title="Burwood Road"
            />
          </Col>
          <Col lg="4">
            <Card
              cardLink="/gwendolen-cres"
              image={imageSix}
              alt="Gwendolen Cres"
              title="Gwendolen Cres"
            />
          </Col>
        </Row>
        {/* Row 3 */}
        <Row className="two">
          <Col lg="4">
            <Card
              cardLink="/mckee-ave"
              image={imageSeven}
              alt="Mckee Avenue"
              title="Mckee Avenue"
            />
          </Col>
          <Col lg="4">
            <Card
              cardLink="/woodville-ave-toronto"
              image={imageEight}
              alt="Woodville Ave Toronto"
              title="Woodville Ave Toronto"
            />
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default Projects
