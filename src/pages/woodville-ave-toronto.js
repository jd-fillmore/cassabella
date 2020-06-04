import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/woodville/1.jpg"
import image2 from "../images/projects/woodville/2.jpg"
import image3 from "../images/projects/woodville/3.jpg"
import image4 from "../images/projects/woodville/4.jpg"
import image5 from "../images/projects/woodville/5.jpg"
import image6 from "../images/projects/woodville/6.jpg"

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
  {
    original: image5,
    thumbnail: image5,
  },
  {
    original: image6,
    thumbnail: image6,
  },
]

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
    <SEO
      title="Woodville Ave Toronto"
      description="Check out the project Woodville Ave from Cass-A-Bella Construction. Click here to view the project."
    />
    <Nav />
    <InnerHero title="Woodville Ave, Toronto" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Woodville Ave, Toronto"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default WoodvilleAveToronto
