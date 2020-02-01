import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import SectionOne from "../components/services/sectionOne/sectionOne"
import callOutTopImage from "../images/second-floor-additions/second-floor-additions.jpg"
import SectionTwo from "../components/services/sectionTwo/sectionTwo"
import callOutBtmImage from "../images/second-floor-additions/second-floor-additions2.jpg"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const SecondFloorAdditions = () => (
  <Layout>
    <SEO title="Second Floor Additions" />
    <Nav />
    <InnerHero title="Second Floor Additions" />
    <section id="main-content" className="services">
      <SectionOne
        heading="With passion for innovative design and high-quality building, Cass-A-Bella Construction offers turnkey solutions for adding a second floor to your property."
        text="Using the finest materials and latest technology, our team is careful to match the external aesthetics of the addition to the rest of your home."
        callOutText="Turnkey Solutions"
        callOutSubText="Satisfaction guaranteed"
        callOutTopImage={callOutTopImage}
        callOutTopImageAlt="turnkey solutions"
      />
      <SectionTwo
        heading="With years of industry experience, we deliver high-quality additions in a timely and cost-effective manner."
        text="To ensure your project runs as smoothly as possible and to your exact specifications, our team will be in touch throughout the process."
        callOutText="High-Quality Second Floor Additions"
        callOutSubText="We deliver all projects in a timely and cost-effective manner"
        callOutBtmImage={callOutBtmImage}
        callOutBtmImageAlt="High-Quality Second Floor Additions"
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default SecondFloorAdditions
