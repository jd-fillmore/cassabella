import React from "react"
import { Container, Row, Col } from "reactstrap"
import CallOut from "../callOut/callOut"

import introImage from "../../images/about/intro.jpg"

const AboutIntro = () => {
  const aboutContent = {
    introTitle: "What makes up a great builder?",
    introText:
      "A company is the sum of its parts. Cass-A-Bella Construction is made up of professional people that have the ability to deliver.  Fernando Duarte, who for several years was a project manager for a large custom home and addition construction company, some ten years ago he decided to move to the next level of his career and start his own company. With a long-term plan in hand and aspirations of building a legacy for his family, he named the company after his two daughters, Cassandra and Isabella, thus Cass-A-Bella Construction. With strong family values as a foundation for ethics and unprecedented experience in the addition building industry, he wanted to build a team of professionals that believed in his philosophy of working close with homeowners, as if they were family, as well growing the company.  Dedicated to the success of the business, focusing that all projects are built perfect and to the satisfaction of the homeowner has been the reason for the success and growth. Fernando Duarte’s primary function is to schedule and manage the tradesmen and supplies. Management of a project is the most important part of any construction.",
    introImage: { introImage },
    introImageAlt: "Cass-A-Bella Construction",
  }
  return (
    <div>
      <Container>
        <Row>
          <Col lg="5">
            <CallOut
              text={aboutContent.introTitle}
              subText="Over 100 homes completed."
              image={introImage}
              alt={aboutContent.introImageAlt}
            />
          </Col>
          <Col lg={{ size: 6, offset: 1 }}>
            <p>{aboutContent.introText}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutIntro
