import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../services/services.scss"
import Card from "../../card/card"
import Button from "../../button/button"
import imageOne from "../../../images/custom-home-additions-toronto.jpg"
import imageTwo from "../../../images/custom-second-floor-additions-misssauga.jpg"
import imageThree from "../../../images/custom-rear-home-additions-etobicoke.jpg"

const Services = props => {
  return (
    <div>
      <section id="services">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2 data-aos="fade-up">{props.title}</h2>
              <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
                {props.subtitle}
              </p>
            </Col>
          </Row>
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
                  cardLink="/custom-home-building"
                  image={imageThree}
                  alt="Custom Homes Etobicoke"
                  title="Custom Homes"
                  text="We design custom upholstered furniture and bring your outdated pieces back to life."
                />
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="12">
              <Link to="/services">
                <Button aria-label="View All">View All</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Services
