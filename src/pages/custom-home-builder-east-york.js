import React from "react"

import "../components/seo-pages.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import Footer from "../components/footer/footer"
import InnerHero from "../components/inner/hero/innerHero"
import Project from "../components/seo/project"
import Intro from "../components/seo/intro"
import mainImage from "../images/custom-home-builder-east-york-mississauga-toronto.jpg"
import SectionTwo from "../components/about/sectionTwo/sectionTwo"
import SectionThree from "../components/about/sectionThree/sectionThree"
import Testimonial from "../components/seo/testimonial"
import ContentOne from "../components/seo/contentOne"
import ContentTwo from "../components/seo/contentTwo"
import ThingsToDo from "../components/seo/thingsToDo"
import CTA from "../components/seo/cta.js"

const projectItems = [
  "New home",
  "9 ft basement",
  "Sauna and walking shower",
  "Dance room",
  "Entertainment room",
]

const CustomHomeBuildersEastYork = () => (
  <Layout>
    <SEO
      title="Custom Home Builders East York, Mississauga, Toronto"
      description="Best Custom Home Builders in East York, Toronto and Mississauga. Contact us for your questions and inquiries today."
    />
    <Nav />
    <InnerHero title="Custom Home Builders in East York, Mississauga &amp; Toronto" />
    <section id="main-content" class="seo-page">
      {/* Project */}
      <Project
        mainImage={mainImage}
        altTag="Custom home builders in East York, Mississauga &amp; Toronto"
        projectItems={projectItems}
        projectTitle="Mckee Avenue"
        projectLink="/mckee-avenue"
        secondTitle="Other custom home build projects in East York, Mississauga & Toronto"
      />
      {/* Intro */}
      <Intro
        title="Are you looking to start a custom home builder project in East York?"
        paragraphOne="Owning a custom home remains a lifetime dream we all strive to achieve. Are you
        planning to build a new custom home but overwhelmed about finding the best Custom
        Home Builders in East York?
        Welcome to Cass-A-Bella Construction the professional homebuilders in Mississauga.
        We provide highly qualified experts to handle your project and ensure project
        completion on time and within the set budget. At Cass-A-Bella Construction, we are a
        one-stop-shop when it comes to building and construction of custom homes. Just give
        us a call and we will be glad to serve you.
        Why trust us with your custom home building project? Here are some of the reasons we
        stand out as the best custom home builders in and of the larger GTA area.
        "
        // paragraphTwo="For professional second floor additions in East York, contact Cass-A-Bella Construction. With over 15 years in building and construction, we have the experience and shall transform your property into your dream home. Why choose us for second floor additions in Mississauga?"
      />
      {/* Testimonial */}
      <Testimonial
        text="Cass-A-Bella Construction, design build team – what can I say... it was nice to find a group of men that cared about what they did. Craftsmanship and pride of workmanship was evident! Thank you to all of you. Thank you Charles for giving us the courage to renovate and build. Thank you Fernando and his team of builders for making our dream home come true."
        author="Edgar Ferrerria"
      />
      {/* Meet The Team */}
      <div className="meet-team">
        <SectionTwo />
      </div>
      {/* Content One*/}
      <ContentOne
        titleOne="We Have An In-house Team"
        textOne="At Cass-A-Bella Construction, we provide end-to-end solutions when it comes to custom
        homebuilding. Our Mississauga clients enjoy peace of mind knowing that we shall
        handle every phase handing over a ready custom home.
        Our in-house custom home designers will listen to customer’s requirements and come
        up with a unique design. The architects will move in and ensure architectural drawings
        approval. We have an experienced project management team that works with all
        stakeholders to ensure the project runs smoothly.
        In that regard, with Cass-A-Bella Construction in charge of your custom home building
        project, you can attend to other important duties knowing that a responsible and trusted
        partner is on-site. 
        "
        titleTwo="Our Passion for Custom Home Building Sets Us Apart
        From the Competition"
        textTwo="When hiring a contractor, you have to look out for skill and expertise. At Cass-A-Bella
        Construction, we employ contractors who have shown a passion for the tasks they
        provide. Thus, we are able to deliver results without any difficulties. Our passion for
        building custom homes helps us to stay focused. Ultimately, we are able to deliver
        amazing results as per the customer’s requirements. In that regard, next time you are
        searching for custom home builders, we are ready to take up the task.
        "
      />
      {/* Content Two*/}
      <ContentTwo
        titleOne="Well-Equipped and Professional Contractors"
        textOne="As the best custom home builders in East York, we offer all the tools necessary to
        ensure your custom home building project runs smoothly. No matter what challenges lie
        ahead, our team is able to thrive and deliver to the customers’ expectations.
        We hire qualified personnel who understand the industry and have attained professional
        qualifications. Therefore, when it comes to building your dream custom home, trust
        Cass-A-Bella Construction the professional custom home builders in Mississauga
        Toronto. 
        "
        titleTwo="High-Quality Results at Competitive Rates"
        textTwo="Another reason why we stand out as the best custom home builders in Mississauga is
        the ability to deliver high-quality results at competitive rates. Moreover, we stick to
        project timelines ensuring complete custom home within the agreed timelines.
        Our quality services come at unbelievably best pricing compared to others in the
        market. This has helped us get many referrals from our past customers. Contact us
        today for the best results when it comes to the construction of custom homes in
        Toronto."
      />
      {/* Guarentee*/}
      <div className="meet-team">
        <SectionThree />
      </div>
      {/* Things To Do */}
      <ThingsToDo
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369106.72669820994!2d-79.65823436584252!3d43.717899026009725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1592154058768!5m2!1sen!2sca"
        title="Things To Do In Toronto"
        text="Are you visiting Toronto or planning to move to Toronto? Welcome to our amazing city
        where you will find amazing attractions. Here are the top sites you will love to visit in
        Toronto.
        
        The Royal Ontario Museum
        You have not been to Toronto until you visit the Royal Ontario Museum. Rated as one
        of the largest museums in North America, the museum is a top destination among local
        and international tourists. The Royal Ontario Museum offers free admission one
        Monday night a month.
        
        Casa Loma Toronto
        Constructed in 1911, Casa Loma remains a major attraction especially among lovers of
        Halloween stuff. The Casa Loma is an ideal place for family bonding and features a
        great atmosphere to enjoy your afternoons.
        
        Visit CN Tower
        The CN Tower is a popular landmark featuring a glass revolving eatery. The mind-
        blowing views leave a lasting memory in your mind. You also get a chance to taste
        different Canadian and Ontario foods at the best rates.
        Life in Toronto is simply amazing as you get different things to do and a good number of
        places you will love to visit. Check out these popular attractions next time you are
        visiting Toronto.   
         
        "
      />
    </section>
    {/* CTA */}
    <CTA title="Need a custom home builder in the East York, Mississauga or Toronto area?" />
    <Footer />
  </Layout>
)

export default CustomHomeBuildersEastYork
