import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <InnerHero title="About" />
  </Layout>
)

export default About
