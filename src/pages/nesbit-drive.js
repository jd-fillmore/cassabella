import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/nesbit/1.jpg"
import image2 from "../images/projects/nesbit/2.jpg"
import image3 from "../images/projects/nesbit/3.jpg"
import image4 from "../images/projects/nesbit/4.jpg"
import image5 from "../images/projects/nesbit/5.jpg"
import image6 from "../images/projects/nesbit/6.jpg"
import image7 from "../images/projects/nesbit/7.jpg"
import image8 from "../images/projects/nesbit/8.jpg"

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
]

const projectItems = [
  "New Home",
  "Two car tendon garage with access to main house",
  "Large kitchen area with full glass wall in the back of the house looking to ravine backyard",
  "Open raised stair case with glass railings",
  "10 ft ceiling main floor",
  "9 ft second floor",
  "9 ft basement",
  "4 bedrooms home with 3 bathrooms",
  "Balcony access from master bedroom",
  "Floor to ceiling door and window on main entrance area",
  "Flat roof",
  "Stucco and brick and wood siding exterior",
  "Custom made garage door",
  "Commercial windows",
]

const NesbitDrive = () => (
  <Layout>
    <SEO title="Nesbit Drive" />
    <Nav />
    <InnerHero title="Nesbit Drive" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Nesbit Drive"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default NesbitDrive
