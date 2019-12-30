import React from "react"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../components/typography.scss"
import "../components/button.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Hero from "../components/home/hero/hero"
import Services from "../components/home/services/services"
import FeaturedHome from "../components/home/featured/featured"
import About from "../components/home/about/about"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Custom Home Renovation Company Etobicoke, Toronto, Mississauga" />
    <Nav />
    <Hero />
    <Services
      title="Our Range of Custom Home Renovation Services"
      subtitle="Located in the heart of Toronto, we deliver top-value and peace of mind. Serving Etobicoke, Mississauga & Toronto."
    />
    <FeaturedHome />
    <About
      title="About Cass-A-Bella Construction"
      subtitle="For all your home renovation, addition or building needs, turn to the professionals at Cass-A-Bella Construction."
    />
    <CTA />
    <Footer />
  </Layout>
)

export default IndexPage
