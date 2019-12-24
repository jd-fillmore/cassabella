import React from "react"
import { Link } from "gatsby"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Hero from "../components/home/hero/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Hero />
  </Layout>
)

export default IndexPage
