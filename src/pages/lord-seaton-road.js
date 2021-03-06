import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/lord/1.jpg"
import image2 from "../images/projects/lord/2.jpg"
import image3 from "../images/projects/lord/3.jpg"
import image4 from "../images/projects/lord/4.jpg"
import image5 from "../images/projects/lord/5.jpg"
import image6 from "../images/projects/lord/6.jpg"
import image7 from "../images/projects/lord/7.jpg"
import image8 from "../images/projects/lord/8.jpg"
import image9 from "../images/projects/lord/9.jpg"
import image10 from "../images/projects/lord/10.jpg"
import image11 from "../images/projects/lord/11.jpg"
import image12 from "../images/projects/lord/12.jpg"
import image13 from "../images/projects/lord/13.jpg"

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
  {
    original: image11,
    thumbnail: image11,
  },
  {
    original: image12,
    thumbnail: image12,
  },
  {
    original: image13,
    thumbnail: image13,
  },
]

const projectItems = [
  "New garage addition",
  "New side addition",
  "New overall second floor addition",
  "10 ft main floor",
  "8 ft second floor",
  "Full existing gout out",
  "New kitchen new mechanicals HVAC / Electrical / Plumbing",
  "New windows",
  "New kitchen",
  "Stucco and stone",
  "New cedar siding and custom posts",
  "4 bedrooms and 4 bathrooms including a master ensuite and walking closet",
]

const LordSeatonRoad = () => (
  <Layout>
    <SEO
      title="Lord Seaton Road"
      description="Check out the project Lord Seaton Road from Cass-A-Bella Construction. Click here to view the project."
    />
    <Nav />
    <InnerHero title="Lord Seaton Road" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Lord Seaton Road"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default LordSeatonRoad
