import React from "react"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Hero from "../components/home/hero/hero"
import Services from "../components/home/services/services"
import FeaturedHome from "../components/home/featured/featured"
import About from "../components/home/about/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
      text="Our team proudly uses state-of-the-art material and technology, and approaches each job with years of industry knowledge and expertise. As such, we are recognized as a fully licensed and insured company.

With over 40 years design and building experience, our founders, Fernando Duarte and Charles Sciberras, have the technical abilities to outperform other contractors, be it through custom design work, efficient project management or cost-effective building solutions.

Moreover, we are covered by five million dollars in liability insurance for all aspects of construction, including:"
    />
  </Layout>
)

export default IndexPage
