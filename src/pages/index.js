import React, { Component } from "react"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../components/typography.scss"
import "../components/general.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Hero from "../components/home/hero/hero"
import Services from "../components/home/services/services"
import FeaturedHome from "../components/home/featured/featured"
import About from "../components/home/about/about"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SEO
            title="Best Custom Home Renovation Company in East York"
            description="Best custom home renovation company in East York. Check out our extensive portfolio in the GTA. If you'd like a free quote, click here now!"
          />
          <Nav />
          <Hero />
          <Services
            title="Our Range of Custom Home Renovation Services"
            subtitle="Located in the heart of East York, we deliver top-value and peace of mind. Serving East York and surrounding areas."
          />
          <FeaturedHome />
          <About
            title="About Cass-A-Bella Construction"
            subtitle="For all your home renovation, addition or building needs, turn to the professionals at Cass-A-Bella Construction."
            alt="White House"
          />
          <CTA />
          <Footer />
        </Layout>
      </div>
    )
  }
}

export default IndexPage
