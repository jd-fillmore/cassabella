import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/mckee/1.jpg"
import image2 from "../images/projects/mckee/2.jpg"
import image3 from "../images/projects/mckee/3.jpg"
import image4 from "../images/projects/mckee/4.jpg"
import image5 from "../images/projects/mckee/5.jpg"
import image6 from "../images/projects/mckee/6.jpg"
import image7 from "../images/projects/mckee/7.jpg"
import image8 from "../images/projects/mckee/8.jpg"
import image9 from "../images/projects/mckee/9.jpg"
import image10 from "../images/projects/mckee/10.jpg"

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
  {
    original: image7,
    thumbnail: image7,
  },
  {
    original: image8,
    thumbnail: image8,
  },
  {
    original: image9,
    thumbnail: image9,
  },
  {
    original: image10,
    thumbnail: image10,
  },
]

const projectItems = [
  "New home",
  "9 ft basement",
  "Sauna and walking shower",
  "Dance room",
  "Entertainment room",
  "10 ft main floor",
  "Kitchen with walk out to large deck",
  "Main room fire place with stone floor to ceiling",
  "Large skylight in center of house",
  "Second floor 8 ft",
  "4 bedrooms and 3 bathrooms",
  "Double car garage",
  "Stucco and stone work",
]

const MckeeAve = () => (
  <Layout>
    <SEO title="Mckee Ave" />
    <Nav />
    <InnerHero title="Mckee Ave" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Mckee Ave"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default MckeeAve
