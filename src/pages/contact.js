import React from "react"
import { Container, Col, Row } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Nav />
    <InnerHero title="Contact" />
    <section id="main-content">
      <Container>
        <Row>
          <Col lg="12">
            <h2>Coming soon!</h2>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default Contact
