import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const projectItems = [
  "New second floor addition",
  "Full gout out on existing first floor",
  "Raised first floor to 9 ft",
  "Second floor 8 ft",
  "3 bedrooms master ensuite and main bathroom",
  "New kitchen",
  "New mechanicals HVAC / Electrical / Plumbing",
  "New stucco main floor and second floor",
  "New stone work",
  "New front porch",
]

const WoodvilleAveToronto = () => (
  <Layout>
    <SEO title="Woodville Ave Toronto" />
    <Nav />
    <InnerHero title="Woodville Ave, Toronto" />
    <section id="main-content">
      <ProjectDescription
        projectTitle="Woodville Ave, Toronto"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default WoodvilleAveToronto
