import React from "react"

import "../components/seo-pages.scss"
import imageTeam from "../images/about/team.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Footer from "../components/footer/footer"
import InnerHeroIG from "../components/inner/hero/innerHeroIG"
import mainImage from "../images/second-floor-additions-east-york-mississauga-toronto.jpg"
import CallOut from "../components/callOut/callOut"
import SectionThree from "../components/about/sectionThree/sectionThree"
import Testimonial from "../components/seo/testimonial"
import CTA from "../components/seo/cta.js"

const SecondFloorAdditionsEastYork = () => (
  <Layout>
    <SEO
      title="Second Floor Additions in Toronto"
      description="Best second floor additions in Toronto. Tons of projects under our belt. Contact us for your questions and inquiries today."
    />
    <Nav />
    <InnerHeroIG title="Second Floor Additions in Toronto" />
    <section id="main-content" class="seo-page">
      <img src={mainImage} alt="ig landing" />

      <Testimonial
        text="Really great experience with Cass-a-Bella construction. My second floor addition was done on time and on budget."
        author="Chad Waterman"
      />

      {/* Meet The Team */}
      <div className="meet-team">
        <CallOut
          text="Meet The Team"
          subText="Charles Sciberras & Fernando Duarte"
          image={imageTeam}
          alt="hi"
        />
      </div>

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
