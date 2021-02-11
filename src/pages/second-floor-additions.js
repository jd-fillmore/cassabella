import React from "react"

import "../components/seo-pages.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Footer from "../components/footer/footer"
import InnerHeroIG from "../components/inner/hero/innerHeroIG"
import Project from "../components/seo/project"
import mainImage from "../images/second-floor-additions-east-york-mississauga-toronto.jpg"
import SectionTwo from "../components/about/sectionTwo/sectionTwo"
import SectionThree from "../components/about/sectionThree/sectionThree"
import Testimonial from "../components/seo/testimonial"
import ContentTwo from "../components/seo/contentTwo"
import CTA from "../components/seo/cta.js"

const projectItems = [
  "New garage addition",
  "New side addition",
  "New overall second floor addition",
  "10 ft main floor",
  "8 ft second floor",
]

const SecondFloorAdditionsEastYork = () => (
  <Layout>
    <SEO
      title="Second Floor Additions in Toronto"
      description="Best second floor additions in Toronto. Tons of projects under our belt. Contact us for your questions and inquiries today."
    />
    <Nav />
    <InnerHeroIG title="Second Floor Additions in Toronto" />
    <section id="main-content" class="seo-page">
      {/* Project */}
      <Project
        mainImage={mainImage}
        altTag="Second Floor Additions in East York, Mississauga &amp; Toronto"
        projectItems={projectItems}
        projectTitle="Tangemere Road"
        projectLink="/tangemere-road"
        secondTitle="Other second floor addition projects in East York, Mississauga & Toronto"
      />
      {/* Testimonial */}
      <Testimonial
        text="Really great experience with Cass-a-Bella construction. My second floor addition was done on time and on budget."
        author="Chad Waterman"
      />
      {/* Meet The Team */}
      <div className="meet-team">
        <SectionTwo />
      </div>
      {/* Content Two*/}
      <ContentTwo
        titleOne="Licensed Homebuilders and Quality Materials"
        textOne="By hiring our licensed homebuilders, homeowners can takeout the guesswork, out of the second story addition in east York. Cass-A-Bella Construction shall ensure that your project runs smoothly and meets all requirements by the city and federal government. Our licensed homebuilders have undergone proper training and acquired the knowledge needed to ensure successful second floor additions in East York."
        titleTwo="Cost-Effective and Timely Project Completion For Your Second Floor Addition"
        textTwo="At Cass-A-Bella Construction, we understand the importance of ensuring the second floor additions in East York will be completed as scheduled. Moreover, we are a budget conscious second room addition contractor. Before the project begins, we listen to customers requirements in terms of project timeline. Thus, we come up with a proper project plan to ensure that the project is complete on time. Moreover, we ensure competitive bids, guaranteeing your project is completed on budget. For successful second floor additions in East York, Contact Cass-A-Bella Construction. We are professional building contractors, committed to ensuring timely project completion and within the budget."
      />
      {/* Guarentee*/}
      <div className="meet-team">
        <SectionThree />
      </div>
    </section>
    {/* CTA */}
    <CTA title="Need a second floor addition done?" />
    <Footer />
  </Layout>
)

export default SecondFloorAdditionsEastYork
