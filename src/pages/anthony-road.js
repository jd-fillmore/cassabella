import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/anthony/1.jpg"
import image2 from "../images/projects/anthony/2.jpg"
import image3 from "../images/projects/anthony/3.jpg"
import image4 from "../images/projects/anthony/4.jpg"
import image5 from "../images/projects/anthony/5.jpg"
import image6 from "../images/projects/anthony/6.jpg"
import image7 from "../images/projects/anthony/7.jpg"
import image8 from "../images/projects/anthony/8.jpg"

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
  "New 2 car tendon heated garage",
  "New back addition",
  "New overall second floor addition",
  "New back cover porch",
  "Full existing gout out",
  "9 ft first floor",
  "8 ft second floor",
  "All new mechanicals HVAC / Electrical and plumbing",
  "New kitchen",
  "Main floor built in wall units",
  "4 bedrooms and 3 bathrooms",
  "Walking closet master ensuite",
  "Full stucco",
  "Stone work",
  "Iron railings",
  "All new windows and doors",
]

const AnthonyRoad = () => (
  <Layout>
    <SEO
      title="Anthony Road"
      description="Check out the project Anthony Road from Cass-A-Bella Construction. Click here to view the project."
    />
    <Nav />
    <InnerHero title="Anthony Road" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Anthony Road"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default AnthonyRoad
