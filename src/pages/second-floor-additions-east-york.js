import React from "react"
import { Container, Col, Row } from "reactstrap"

import "../components/contact/contact.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"
import InnerHero from "../components/inner/hero/innerHero"

const SecondFloorAdditionsEastYork = () => (
  <Layout>
    <SEO
      title="Second Floor Additions East York"
      description="Have questions about Cass-A-Bella Construction? Please don't hesitate. Contact us for your questions and inquiries today."
    />
    <Nav />
    <InnerHero title="Second Floor Additions in East York" />
    <section id="main-content" className="contact">
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h2>Please contact us using the form below.</h2>
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default SecondFloorAdditionsEastYork
