import React from "react"
import { Container, Row, Col } from "reactstrap"
import CallOut from "../../callOut/callOut"

import introImage from "../../../images/about/intro.jpg"
import imageTeam from "../../../images/about/team.jpg"
import "../sectionTwo/section-two.scss"

const AboutIntroTwo = () => {
  const aboutContent = {
    cardTitle: "Meet The Team",
    cardSubTitle: "Charles Sciberras & Fernando Duarte",
    textOne:
      "With over 100+ homes completed, Cass-A-Bella Construction continues to provide quality workmanship and craftsmanship in all our designs and builds. We strive for excellence and to provide our customers with the home building industries most comprehensive pricing quotation on all our projects. We are honest and upfront regarding all the costs for supplies and specifications. We keep all of our projects on budget and provide value for all upgrades and modifications made during the construction phase.",
    textTwo:
      "His long time friend, Charles Sciberras, one of Toronto's most respected design/cost professionals with over twenty years of experience is one of the assets that sets Cass-A-Bella apart from their competition. The combination of Fernando and Charles each skillfully doing their respective part in the company has allowed the company to run smoothly and effectively. Charles Sciberras has designed hundreds of projects, all focused on architectural considerations, return on investment, family functionality and budget requirements. He presently designs the over all look and functionality of each project calculating the cost in relationship to investment.",
    textThree:
      "Cass-A-Bella Construction is supported by a large group of professional people, starting with in house staff to sub-trades and suppliers, all working in harmony sharing the same vision and striving for successful results in the completion of each project. For the most part, the Cass-A-Bella tradesmen have worked with the company from its inception, and are professional in every way, licensed, insured, and more importantly, exceptionally well experienced in the complex field of addition building. Cass-A-Bella Construction also has had a long term relationship with its suppliers and has a triple A ranked credit rating. Cass-A-Bella Construction is Tarion Approved, Visa Approved, Master Card approved and are licensed in Toronto and Mississauga.",
    introImage: { introImage },
    introImageAlt: "Cass-A-Bella Construction",
  }
  return (
    <div>
      <section id="section-two">
        <Container>
          <Row>
            <Col lg="6">
              <p>{aboutContent.textOne}</p>
              <p>{aboutContent.textTwo}</p>
            </Col>
            <Col lg={{ size: 5, offset: 1 }}>
              <CallOut
                text={aboutContent.cardTitle}
                subText={aboutContent.cardSubTitle}
                image={imageTeam}
                alt={aboutContent.introImageAlt}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default AboutIntroTwo
