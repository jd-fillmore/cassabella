import React from "react"
import { Container, Row, Col } from "reactstrap"
import CallOut from "../../callOut/callOut"

import introImage from "../../../images/about/intro.jpg"
import "../sectionOne/section-one.scss"

const SectionOne = () => {
  const aboutContent = {
    cardTitle: "What makes up a great builder?",
    cardSubTitle: "Over 100 homes completed since 2003.",
    introTitleTwo: "A company is the sum of its parts.",
    introText:
      "Cass-A-Bella Construction is made up of professional people that have the ability to deliver.  Fernando Duarte, who for several years was a project manager for a large custom home and addition construction company, in 2003 Fernando decided to move to the next level of his career and start his own company. With a long-term plan in hand and aspirations of building a legacy for his family, he named the company after his two daughters, Cassandra and Isabella, thus Cass-A-Bella Construction. With strong family values as a foundation for ethics and unprecedented experience in the addition building industry, he wanted to build a team of professionals that believed in his philosophy of working close with homeowners, as if they were family, as well growing the company.  Dedicated to the success of the business, focusing that all projects are built perfect and to the satisfaction of the homeowner has been the reason for the success and growth. Fernando Duarte’s primary function is to schedule and manage the tradesmen and supplies. Management of a project is the most important part of any construction.",
    introSecondText:
      "Cass-A-Bella Construction has enjoyed great success over the last few decades due primarily to our ability to deliver what we promise. We are proud to invite our fellow Torontonians to contact us regarding any questions you may have about an upcoming project, or come visit us at our office/show room facility at 51 Laird drive just south of Eglinton Ave.",
    introImage: { introImage },
    introImageAlt: "Cass-A-Bella Construction Team",
  }
  return (
    <div>
      <section id="section-one">
        <Container>
          <Row>
            <Col lg="5">
              <CallOut
                text={aboutContent.cardTitle}
                subText={aboutContent.cardSubTitle}
                image={introImage}
                alt={aboutContent.introImageAlt}
              />
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <h4>{aboutContent.introTitleTwo}</h4>
              <p>{aboutContent.introText}</p>
            </Col>
          </Row>
          <Row className="two">
            <Col lg="12">
              <p>{aboutContent.introSecondText}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default SectionOne
