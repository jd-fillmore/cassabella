import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../components/inner/inner.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import Card from "../components/card/card"
import imageOne from "../images/custom-home-additions-toronto.jpg"
import imageTwo from "../images/custom-second-floor-additions-misssauga.jpg"
import imageThree from "../images/custom-rear-home-additions-etobicoke.jpg"
import imageFour from "../images/custom-home-renovation.jpg"
import imageFive from "../images/custom-home-building.jpg"
import ServicesProvided from "../components/services/servicesProvided/servicesProvided"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Nav />
    <InnerHero title="Services" />
    <section id="main-content">
      <Container>
        <Row>
          <Col lg="4" className="d-flex">
            <div data-aos="fade-in" data-aos-delay="500">
              <Card
                cardLink="/home-additions"
                image={imageOne}
                alt="Custom Home Additions Toronto"
                title="Home Additions"
                text="With years of experience, our skilled builders provide excellent advice and project management."
              />
            </div>
          </Col>
          <Col lg="4" className="d-flex">
            <div data-aos="fade-in" data-aos-delay="700">
              <Card
                cardLink="/second-floor-additions"
                image={imageTwo}
                alt="Custom Second Floor Additions Mississauga"
                title="Second Floor Additions"
                text="Our team is careful to match the external aesthetics of the addition to the rest of your home."
              />
            </div>
          </Col>
          <Col lg="4" className="d-flex">
            <div className="d-flex" data-aos="fade-in" data-aos-delay="900">
              <Card
                cardLink="/rear-home-additions"
                image={imageThree}
                alt="Custom Rear Home Additions Etobicoke"
                title="Rear Home Additions"
                text="We design custom upholstered furniture and bring your outdated pieces back to life."
              />
            </div>
          </Col>
        </Row>
        <Row className="two">
          <Col lg="4" className="d-flex">
            <div className="d-flex" data-aos="fade-in" data-aos-delay="500">
              <Card
                cardLink="/home-renovation"
                image={imageFour}
                alt="Custom Home Additions Toronto"
                title="Home Renovation"
                text="Our team of professionals can provide invaluable help with your project."
              />
            </div>
          </Col>
          <Col lg="4" className="d-flex">
            <div data-aos="fade-in" data-aos-delay="700">
              <Card
                cardLink="/custom-home-building"
                image={imageFive}
                alt="Custom Home Building Mississauga"
                title="Custom Home Building"
                text="Our team is careful to match the external aesthetics of the addition to the rest of your home."
              />
            </div>
          </Col>
        </Row>
      </Container>
      <ServicesProvided />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default Services
