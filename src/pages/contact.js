import React from "react"
import { Container, Col, Row } from "reactstrap"

import "../components/contact/contact.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"
import InnerHero from "../components/inner/hero/innerHero"
import ContactForm from "../components/contact/contactForm"
import ContactMap from "../components/contact/contactMap"
import ContactLegal from "../components/contact/contactLegal"

const Contact = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Have questions about Cass-A-Bella Construction? Please don't hesitate. Contact us for your questions and inquiries today."
    />
    <Nav />
    <InnerHero title="Contact" />
    <section id="main-content" className="contact">
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h2>Please contact us using the form below.</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="6">
            <ContactForm />
            <ContactLegal />
          </Col>
          <Col lg="6">
            <ContactMap />
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default Contact
