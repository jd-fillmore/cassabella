import React from "react"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Hero from "../components/home/hero/hero"
import Services from "../components/home/services/services"
import FeaturedHome from "../components/home/featured/featured"

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
  </Layout>
)

export default IndexPage
