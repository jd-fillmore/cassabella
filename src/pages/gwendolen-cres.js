import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import ProjectDescription from "../components/projects/projectDescription"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import image1 from "../images/projects/gwendolen/1.jpg"
import image2 from "../images/projects/gwendolen/2.jpg"
import image3 from "../images/projects/gwendolen/3.jpg"
import image4 from "../images/projects/gwendolen/4.jpg"
import image5 from "../images/projects/gwendolen/5.jpg"
import image6 from "../images/projects/gwendolen/6.jpg"
import image7 from "../images/projects/gwendolen/7.jpg"
import image8 from "../images/projects/gwendolen/8.jpg"
import image9 from "../images/projects/gwendolen/9.jpg"
import image10 from "../images/projects/gwendolen/10.jpg"
import image11 from "../images/projects/gwendolen/11.jpg"
import image12 from "../images/projects/gwendolen/12.jpg"

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
]

const projectItems = [
  "New second floor addtion",
  "Existing garage",
  "Main floor partially removated",
  "Raised first floor to 10 ft",
  "9 ft second floor",
  "4 Bedrooms and 2 bathrooms including a master large closet",
  "Reading area open to below",
  "New moderm open riser staircase with glass railings",
  "Stucco in the entire house",
  "New stone work",
  "All new windows",
]

const GwendolenCres = () => (
  <Layout>
    <SEO title="Gwendolen Cres" />
    <Nav />
    <InnerHero title="Gwendolen Cres" />
    <section id="main-content">
      <ProjectDescription
        images={images}
        projectTitle="Gwendolen Cres"
        projectItems={projectItems}
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default GwendolenCres
