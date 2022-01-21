import React from "react"
import { Container, Col, Row } from "reactstrap"

import CardLink from "../../cardLink/cardLink"
import Aquavida from "../../../images/aquavida.jpg"
import Europa from "../../../images/europa.jpg"

import "./vida-moderna.scss"

const VidaModerna = ({ title, subTitle, desc }) => {
  return (
    <>
      <section className="vida-moderna text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>{title}</h2>
              <h4>{subTitle}</h4>
              <p>{desc}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <CardLink
                image={Aquavida}
                imageAlt="Aquavida"
                link="/vida-moderna"
                btnText="Aquavida"
              />
            </Col>
            <Col lg="6">
              <CardLink
                image={Europa}
                imageAlt="Europa"
                link="/vida-moderna"
                btnText="Europa"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default VidaModerna
