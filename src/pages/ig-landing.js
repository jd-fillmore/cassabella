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
    <section id="main-content" class="seo-page ig-landing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className="img-fluid" src={mainImage} alt="ig landing" />
          </div>
        </div>
      </div>

      <Testimonial
        text="Really great experience with Cass-a-Bella construction. My second floor addition was done on time and on budget."
        author="Chad Waterman"
      />

      {/* Meet The Team */}
      <div className="meet-the-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 meet">
              <CallOut
                text="Meet The Team"
                subText="Charles Sciberras & Fernando Duarte"
                image={imageTeam}
                alt="hi"
              />
            </div>
            <div className="col-lg-6">
              <p>
                With over 100+ homes completed, Cass-A-Bella Construction
                continues to provide quality workmanship and craftsmanship in
                all our designs and builds. We strive for excellence and to
                provide our customers with the home building industries most
                comprehensive pricing quotation on all our projects. We are
                honest and upfront regarding all the costs for supplies and
                specifications. We keep all of our projects on budget and
                provide value for all upgrades and modifications made during the
                construction phase.
              </p>
              <p>
                His long time friend, Charles Sciberras, one of Toronto's most
                respected design/cost professionals with over twenty years of
                experience is one of the assets that sets Cass-A-Bella apart
                from their competition. The combination of Fernando and Charles
                each skillfully doing their respective part in the company has
                allowed the company to run smoothly and effectively. Charles
                Sciberras has designed hundreds of projects, all focused on
                architectural considerations, return on investment, family
                functionality and budget requirements. He presently designs the
                over all look and functionality of each project calculating the
                cost in relationship to investment.
              </p>
            </div>
          </div>
        </div>
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
