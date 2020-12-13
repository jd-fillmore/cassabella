import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

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
            <p>
              Cass-A-Bella Construction hired Infused Agency to help re-build
              their old website into a modern, fast new one. The idea here was
              to properly represent their brand in a new and exciting way, and
              as well rank in Google for certain keywords.
            </p>
            <p>
              At the time of this post, Infused Agency has helped Cass-A-Bella
              Construction rank for tens of keywords in and around the East York
              area. These areas include Google Maps, and Google's Organic Search
              rankings.
            </p>
            <p>
              If you're a business looking for a new website, or you'd like to
              rank high in Google for more customers to find you which will lead
              to more revenue, contact one of the top{" "}
              <a href="https://infused.agency" target="_blank" rel="noreferrer">
                Niagara web design
              </a>{" "}
              and{" "}
              <a href="https://infused.agency" target="_blank" rel="noreferrer">
                Niagara SEO
              </a>{" "}
              companies for a free quote today.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default Infused
