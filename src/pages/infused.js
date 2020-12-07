import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const citiesNiagara = [
  {
    name: "Wainfleet",
    link: "https://infused.agency/wainfleet-web-design",
  },
  {
    name: "Port Colborne",
    link: "https://infused.agency/port-colborne-web-design",
  },
  {
    name: "Beamsville-Lincoln",
    link: "https://infused.agency/beamsville-lincoln-web-design",
  },
  {
    name: "Grimsby",
    link: "https://infused.agency/grimsby-web-design",
  },
  {
    name: "Fort Erie",
    link: "https://infused.agency/fort-erie-web-design",
  },
  {
    name: "Thorold",
    link: "https://infused.agency/thorold-web-design",
  },
  {
    name: "Smithville",
    link: "https://infused.agency/smithville-web-design",
  },
  {
    name: "Pelham",
    link: "https://infused.agency/pelham-web-design",
  },
  {
    name: "Niagara-on-the-Lake",
    link: "https://infused.agency/niagara-on-the-lake-web-design",
  },
]

const citiesHamilton = [
  {
    name: "Hamilton",
    link: "https://infused.agency/hamilton-web-design",
  },
  {
    name: "Waterdown",
    link: "https://infused.agency/waterdown-web-design",
  },
  {
    name: "Dundas",
    link: "https://infused.agency/dundas-web-design",
  },
  {
    name: "Ancaster",
    link: "https://infused.agency/ancaster-web-design",
  },
  {
    name: "Stoney Creek",
    link: "https://infused.agency/stoney-creek-web-design",
  },
  {
    name: "Burlington",
    link: "https://infused.agency/burlington-web-design",
  },
  {
    name: "Caledonia",
    link: "https://infused.agency/caledonia-web-design",
  },
  {
    name: "Binbrook",
    link: "https://infused.agency/binbrook-web-design",
  },
]

const Infused = () => (
  <Layout>
    <SEO
      title="Infused"
      description="Cass-A-Bella Construction is made up of professional people that have the ability to deliver."
    />
    <Nav />
    <InnerHero title="Infused" />
    <section id="main-content" className="infused">
      <Container>
        <Row>
          <Col lg="12">
            <p>A Niagara-based web design, development &amp; SEO company.</p>
            <p>Areas served:</p>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <h5>Niagara</h5>
            <ul>
              {citiesNiagara.map(city => (
                <li>
                  <a href={city.link} rel="noreferrer" target="_blank">
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="3">
            <h5>Hamilton</h5>
            <ul>
              {citiesHamilton.map(city => (
                <li>
                  <a href={city.link} rel="noreferrer" target="_blank">
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default Infused
