import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/innerHero"

const HomeAdditions = () => (
  <Layout>
    <SEO title="Home Additions" />
    <Nav />
    <InnerHero title="Home Additions" />
  </Layout>
)

export default HomeAdditions
