import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import SectionOne from "../components/services/sectionOne/sectionOne"
import callOutTopImage from "../images/custom-home-building/custom-home-building.jpg"
import SectionTwo from "../components/services/sectionTwo/sectionTwo"
import callOutBtmImage from "../images/custom-home-building/custom-home-building2.jpg"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const CustomHomeBuilding = () => (
  <Layout>
    <SEO title="Custom Home Building" />
    <Nav />
    <InnerHero title="Custom Home Building" />
    <section id="main-content" className="services">
      <SectionOne
        heading="With 15 years of experience, we are custom home builders who specifically tailor services to each client's needs."
        text="We aim to consistently deliver projects with high-quality workmanship, safely, and on time!"
        callOutText="Reliable Custom Home Builders"
        callOutSubText="We handle any project regardless of its size or scope"
        callOutTopImage={callOutTopImage}
        callOutTopImageAlt="reliable custom home builders"
      />
      <SectionTwo
        heading="Committed to delivering cutting-edge home building services, Cass-A-Bella Construction offers the ultimate in convenience and style."
        text="Whether it’s a sophisticated, classic or contemporary look, or another design style our highly skilled builders will help make your dream home a reality.
        Moreover, we pride ourselves on being able to meet and surpass your requirements."
        callOutText="Cutting-Edge Home Building"
        callOutSubText="We make your dream home a reality"
        callOutBtmImage={callOutBtmImage}
        callOutBtmImageAlt="cutting-edge home building"
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default CustomHomeBuilding
