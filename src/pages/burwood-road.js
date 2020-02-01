import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/burwood/1.jpg"
import image2 from "../images/projects/burwood/2.jpg"
import image3 from "../images/projects/burwood/3.jpg"
import image4 from "../images/projects/burwood/4.jpg"
import image5 from "../images/projects/burwood/5.jpg"
import image6 from "../images/projects/burwood/6.jpg"
import image7 from "../images/projects/burwood/7.jpg"
import image8 from "../images/projects/burwood/8.jpg"
import image9 from "../images/projects/burwood/9.jpg"

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
  "New second floor addition",
  "Raised main floor to 9 ft high",
  "Second floor 8 ft high",
  "New front portico roof",
  "New garage roof",
  "New kitchen",
  "New mechanicals - HVAC / Electrical / Plumbing",
  "New stucco and stone work",
  "All new windows",
  "4 bedrooms and 3 bathrooms including a walking closet and master ensuite",
]

const BurwoodRoad = () => (
  <Layout>
    <SEO title="Burwood Road" />
    <Nav />
    <InnerHero title="Burwood Road" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Burwood Road"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default BurwoodRoad
