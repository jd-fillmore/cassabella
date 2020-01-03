import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import SectionOne from "../components/about/sectionOne/sectionOne"
import SectionTwo from "../components/about/sectionTwo/sectionTwo"
import SectionThree from "../components/about/sectionThree/sectionThree"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <InnerHero title="About" />
    <section id="main-content" className="about">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default About
