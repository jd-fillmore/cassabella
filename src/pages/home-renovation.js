import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import SectionOne from "../components/services/sectionOne/sectionOne"
import callOutTopImage from "../images/home-renovation/home-reno.jpg"
import SectionTwo from "../components/services/sectionTwo/sectionTwo"
import callOutBtmImage from "../images/home-renovation/home-reno2.jpg"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const HomeRenovation = () => (
  <Layout>
    <SEO
      title="Home Renovation"
      description="Interested in a home renovation project? Look no further. Cass-A-Bella can provide a free home renovation quote for you today."
    />
    <Nav />
    <InnerHero title="Home Renovation" />
    <section id="main-content" className="services">
      <SectionOne
        heading="Cass-A-Bella Construction provides clients with top quality renovation and construction services, always completed to exceptionally high standards."
        text="As a fully insured and licensed company, we guarantee to create a home that is safe and custom designed to suit your lifestyle. Get in touch today!"
        callOutText="Top Quality Renovation Services"
        callOutSubText="We create a home that is safe and custom designed to meet your style and requirements"
        callOutTopImage={callOutTopImage}
        callOutTopImageAlt="top quality renovation services"
      />
      <SectionTwo
        heading="Looking for home renovation builders? Let the experts at Cass-A-Bella Construction deliver the renovation of your dreams – on time and within budget!"
        text="By combining our excellent workmanship with meticulous attention to detail, our team of professionals can provide invaluable help with your project. Our goal is to plan and execute every aspect of your renovation to meet your requirements."
        callOutText="Excellent Workmanship"
        callOutSubText="We create a home that is safe and custom designed to meet your style and requirements"
        callOutBtmImage={callOutBtmImage}
        callOutBtmImageAlt="excellent workmanship"
      />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default HomeRenovation
