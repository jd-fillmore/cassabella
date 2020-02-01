import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import SectionOne from "../components/services/sectionOne/sectionOne"
import callOutTopImage from "../images/rear-home-additions/rear-home-additions.jpg"
import SectionTwo from "../components/services/sectionTwo/sectionTwo"
import callOutBtmImage from "../images/rear-home-additions/rear-home-additions2.jpg"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const RearHomeAdditions = () => (
  <Layout>
    <SEO title="Rear Home Additions" />
    <Nav />
    <InnerHero title="Rear Home Additions" />
    <section id="main-content" className="services">
      <SectionOne
        heading="By taking your specifications into consideration, our team can build rear home additions to complement the existing style of any property."
        text="Moreover, we aim to complete your project to the highest standards, within your budget, and on time. Give us a call today."
        callOutText="Stunning Rear Home Additions"
        callOutSubText="Building rear home additions to complement any property"
        callOutTopImage={callOutTopImage}
        callOutTopImageAlt="Stunning Rear Home Additions"
      />
      <SectionTwo
        heading="We cater to all your home renovation and building needs, including rear home additions."
        text="By combining our expertise with the latest designs and finest materials, we can guarantee end results that are sure to satisfy!"
        callOutText="Expert Builders"
        callOutSubText="We cater to all your home renovation and building needs"
        callOutBtmImage={callOutBtmImage}
        callOutBtmImageAlt="Expert Builders"
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default RearHomeAdditions
