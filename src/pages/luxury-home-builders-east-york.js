import React from "react"

import "../components/seo-pages.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Footer from "../components/footer/footer"
import InnerHero from "../components/inner/hero/innerHero"
import Project from "../components/seo/project"
import Intro from "../components/seo/intro"
import mainImage from "../images/luxury-home-builders-east-york-mississauga-toronto.jpg"
import SectionTwo from "../components/about/sectionTwo/sectionTwo"
import SectionThree from "../components/about/sectionThree/sectionThree"
import Testimonial from "../components/seo/testimonial"
import ContentOne from "../components/seo/contentOne"
import ContentTwo from "../components/seo/contentTwo"
import ThingsToDo from "../components/seo/thingsToDo"
import CTA from "../components/seo/cta.js"

const projectItems = [
  "New 2 car tendon heated garage",
  "New back addition",
  "New overall second floor addition",
  "New back cover porch",
  "Full existing gout out",
]

const LuxuryHomeBuildersEastYork = () => (
  <Layout>
    <SEO
      title="Luxury Home Builders East York, Mississauga, Toronto"
      description="Best Luxury Home Builders in East York, Toronto and Mississauga. Tons of projects under our belt. Contact us for your questions and inquiries today."
    />
    <Nav />
    <InnerHero title="Luxury Home Builders in East York, Mississauga &amp; Toronto" />
    <section id="main-content" class="seo-page">
      {/* Project */}
      <Project
        mainImage={mainImage}
        altTag="Luxury home builders in East York, Mississauga &amp; Toronto"
        projectItems={projectItems}
        projectTitle="Anthony Road"
        projectLink="/anthony-road"
        secondTitle="Other luxury home builder projects in East York, Mississauga & Toronto"
      />
      {/* Intro */}
      <Intro
        title="Are you looking for a luxury home builder in East York?"
        paragraphOne="Building a luxury home in East York is rewarding yet challenging. From floor planning to actual construction, it can be such an overwhelming undertaking. This is especially for new homeowners who have no prior experience in managing relationships with architects, and different subcontractors.
        Are you planning to put up a new luxury home in the Mississauga area? Contact Cass-A-Bella Construction today. At Cass-A-Bella Construction, we provide end-to-end solutions, guaranteeing our customers a smooth experience throughout the project.  
        Therefore, we will design and build your vision, when it comes to luxury home building. Why choose Cass-A-Bella Construction for custom home construction in East York?
        "
        // paragraphTwo="For professional second floor additions in East York, contact Cass-A-Bella Construction. With over 15 years in building and construction, we have the experience and shall transform your property into your dream home. Why choose us for second floor additions in Mississauga?"
      />
      {/* Testimonial */}
      <Testimonial
        text="Cass-A-Bella Construction was amazing to work with! Fernando is extremely professional, very kind and professional to work with. Will recommend in the future!"
        author="J.D. Fillmore"
      />
      {/* Meet The Team */}
      <div className="meet-team">
        <SectionTwo />
      </div>
      {/* Content One*/}
      <ContentOne
        titleOne="We Cover Project Planning, Design and Construction"
        textOne="At Cass-A-Bella Construction, we ensure a solution-oriented approach in any luxury home construction project. We have a well-equipped team of luxury home builders who handle the A to Z of luxury home construction. 
        We provide luxury home designing, come up with architectural drawings, seek approvals on behalf of the client, and ensure complete construction. 
        In that regard, you will not have to worry about managing subcontractors at every stage. Just trust us and we will provide an in-house team to handle every phase from the start to completion. 
        "
        titleTwo="We Bring in Professionalism and High-Level Second Floor Addition Experience"
        textTwo="Second floor addition Toronto is an involving undertaking, requiring keen attention to every detail. This is right from floor planning to nailing down the roof. In that regard, it is advisable that you hire an experienced and reliable contractor. At Cass-A-Bella Construction, we ensure professionalism and bring in years of experience. Our project engineers, architects, and homebuilders have a professional qualification and come with years of experience. Thus, our professionals shall help you to visualize the final project of second floor additions in East York even before the construction has started.
        "
      />
      {/* Content Two*/}
      <ContentTwo
        titleOne="Licensed and Registered Home Builders"
        textOne="Building a luxury home is such a huge investment. To protect your financial input, engage the services of qualified and licensed persons. At  Cass-A-Bella Construction, our builders are registered and licensed to provide luxury homebuilding solutions in Toronto and the greater GTA area. 
        We ensure compliance with the city and federal bylaws when it comes to construction of a custom home. In that regard, you are assured a smooth luxury home construction process from the beginning to the end. 
        "
        titleTwo="Fast and Reliable Luxury Home Construction"
        textTwo="Trust Cass-A-Bella Construction, the best luxury homebuilders in Mississauga for a fast and reliable luxury home construction. At the beginning of the project, we come up with a project plan that is in accordance with the customers’ expectations. Therefore, we plan every phase such that your luxury home will be ready within the expected timelines. Are you looking for the best luxury home builders in East York? Talk to Cass-A-Bella Construction today and experience high-level professionalism when it comes to construction of a luxury home."
      />
      {/* Guarentee*/}
      <div className="meet-team">
        <SectionThree />
      </div>
      {/* Things To Do */}
      <ThingsToDo
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184985.27537429583!2d-79.6344302086207!3d43.577489663386544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1592154200327!5m2!1sen!2sca"
        title="Things To Do In Mississauga"
        text="Mississauga is one of the most attractive cities in Canada.  Are you looking for things to do in Mississauga? Here are some top sights in Mississauga. Kariya Park Mississauga
        Featuring a serene Japanese-inspired garden, Kariya Park is a top attraction site in Mississauga. The park is open to the public and offers a great recreational site for the whole family. Explore Port Credit the Historic Village 
        Port Credit is a historic village that sits along the shoreline of Lake Ontario. The lovely village is a heritage conservation area, featuring the old town atmosphere. 
        Gather with Friends at the Celebration Square
        Located at the heart of Mississauga, the celebration square is a great recreational place where you can meet and catch up with friends. The celebration square is famous for the ice skating rink from late November.
        Mississauga is an amazing place to be. The Mississauga attractions we have covered provide family-friendly sceneries.   
         
        "
      />
    </section>
    {/* CTA */}
    <CTA title="Need a second floor addition done in the East York, Mississauga or Toronto area?" />
    <Footer />
  </Layout>
)

export default LuxuryHomeBuildersEastYork
