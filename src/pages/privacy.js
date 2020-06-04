import React from "react"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

const GDPR = [
  "what are the objectives of the data collection,",
  "if this data is mandatory or optional for the management of your request,",
  "who will have access to it (only Cass-A-Bella Construction unless specified in the form when transmission to a third party is necessary to manage your request),",
]

const Privacy = () => (
  <Layout>
    <SEO
      title="Privacy"
      description="At Cass-A-Bella Construction, we take your privacy very seriously. Please read our website's privacy policy today."
    />
    <Nav />
    <InnerHero title="Privacy Policy" />
    <section id="main-content" className="privacy">
      <Container>
        <Row>
          <Col lg="12">
            <h2>Privacy Policy</h2>
            <p>
              By visiting the Cass-A-Bella Construction website
              (cass-a-bellaconstruction.com), you are accepting and consenting
              to the practices described in this Privacy Policy and to our Terms
              and Conditions.
              <br />
              <br /> Information that is collected about you may include but is
              not limited to your name, company name, address, phone number,
              email address, fax number, cookies, IP logs etc. We may also
              collect information about your use of the Website, such as the
              date and time of your visits, the pages you have accessed, the
              documents you have retrieved, the type of browser used at the time
              of your visit and all personal correspondences with us (primarily
              emails). We take all reasonable steps to protect this information
              from misuse, loss, unauthorized access, modification or
              disclosure.
            </p>
            <h2>General Data Protection Regulation (GDPR)</h2>
            <p>
              Cass-A-Bella Construction is committed to ensuring that the
              collection and processing of your data, carried out from the site
              cass-a-bellaconstruction.com, complies with the General Data
              Protection Regulation (GDR). Each form or teleservice limits the
              collection of personal data to what is strictly necessary
              (minimisation of data) and specifies:
            </p>
            <ul>
              {GDPR.map(items => (
                <li>{items}</li>
              ))}
            </ul>
            <p>
              The personal data collected as part of the services offered on
              cass-a-bellaconstruction.com are processed according to secure
              protocols and enable Cass-A-Bella Construction to handle requests
              received in its computer applications.
              <br />
              <br />
              For any information or to exercise your rights concerning the
              processing of personal data managed by Cass-A-Bella Construction,
              you can contact Cass-A-Bella Construction and if appropriate its
              Data Protection Officer (DPO), if distinguished.
            </p>
            <h2>Links</h2>
            <p>
              Our Website may contain links or references to other websites
              outside of our control. Please be aware that our Privacy Policy
              does not apply to these sites.
            </p>
            <h2>Copyright</h2>
            <p>
              The entire content of this website (cass-a-bellaconstruction.com)
              is copyrighted under Canadian copyright law. You may print and
              download portions of material from the different areas of the Web
              Site solely for your own use. Any other copying, redistribution,
              retransmission or publication of any downloaded material, is
              strictly prohibited without the express written consent of the
              site owner.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default Privacy
