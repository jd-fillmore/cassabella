import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/featherstone/1.jpg"
import image2 from "../images/projects/featherstone/2.jpg"
import image3 from "../images/projects/featherstone/3.jpg"
import image4 from "../images/projects/featherstone/4.jpg"
import image5 from "../images/projects/featherstone/5.jpg"
import image6 from "../images/projects/featherstone/6.jpg"
import image7 from "../images/projects/featherstone/7.jpg"
import image8 from "../images/projects/featherstone/8.jpg"
import image9 from "../images/projects/featherstone/9.jpg"

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
]

const projectItems = [
  "Theater room",
  "20 ft high ceiling Library room",
  "6 bedrooms",
  "6 bathrooms",
  "20 ft high open hallway",
  "First ever elevator system in residential home",
  "10 ft high first floor",
  "9 ft high ceiling second floor",
  "4 car garage",
  "Stucco and stone all around the existing and new build",
  "Full landscape design and build around existing pool",
]

const FeatherwoodAve = () => (
  <Layout>
    <SEO title="Featherstone Ave" />
    <Nav />
    <InnerHero title="Featherstone Ave" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Featherstone Ave"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default FeatherwoodAve
