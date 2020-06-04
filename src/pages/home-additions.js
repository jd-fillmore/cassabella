import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import SectionOne from "../components/services/sectionOne/sectionOne"
import callOutTopImage from "../images/home-additions/home-additions.jpg"
import SectionTwo from "../components/services/sectionTwo/sectionTwo"
import callOutBtmImage from "../images/home-renovation/home-reno2.jpg"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const HomeAdditions = () => (
  <Layout>
    <SEO
      title="Home Additions"
      description="Interested in a home addition project? Look no further. Cass-A-Bella can provide a free home addition quote for you today."
    />
    <Nav />
    <InnerHero title="Home Additions" />
    <section id="main-content" className="services">
      <SectionOne
        heading="With years of experience, our skilled builders provide excellent advice and understanding family needs and budgetary requirements along with superior craftsmanship."
        text="With over 900 thousand ft of custom addition building our unprecedented experience in addition building allows cass-a- bella to be the only design build company in GTA To offer guaranteed completion date and fixed contract price."
        callOutText="Skilled Builders"
        callOutSubText="We provide excellent advice and project management"
        callOutTopImage={callOutTopImage}
        callOutTopImageAlt="home renovation"
      />
      <SectionTwo
        heading="Looking for expert builders? Cass-A-Bella Construction has the required knowledge and experience to handle your home addition project, from design to completion!"
        text="No job too big. We can design build any size addition."
        callOutText="Superior Quality Home Additions"
        callOutSubText="Minimal disruption guaranteed"
        callOutBtmImage={callOutBtmImage}
        callOutBtmImageAlt="home renovation two"
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default HomeAdditions
