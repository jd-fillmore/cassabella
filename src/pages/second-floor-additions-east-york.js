import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row } from "reactstrap"

import "../components/seo-pages.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"
import InnerHero from "../components/inner/hero/innerHero"
import mainImage from "../images/second-floor-additions-east-york-mississauga-toronto.jpg"
import Button from "../components/button/button"
import ContactForm from "../components/contact/contactForm"
import SectionTwo from "../components/about/sectionTwo/sectionTwo"
import SectionThree from "../components/about/sectionThree/sectionThree"

const projectItems = [
  "New garage addition",
  "New side addition",
  "New overall second floor addition",
  "10 ft main floor",
  "8 ft second floor",
]

const SecondFloorAdditionsEastYork = () => (
  <Layout>
    <SEO
      title="Second Floor Additions in East York, Mississauga &amp; Toronto"
      description="Best second floor additions serving East York, Toronto and Mississauga. Tons of projects under our belt. Contact us for your questions and inquiries today."
    />
    <Nav />
    <InnerHero title="Second Floor Additions in East York, Mississauga &amp; Toronto" />
    <section id="main-content" class="seo-page">
      {/* Project */}
      <Container id="project">
        <Row>
          <Col lg="12">
            <img
              src={mainImage}
              alt="Second Floor Additions in East York, Mississauga &amp; Toronto"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <h2>Tangemere Road</h2>
            <ul>
              {projectItems.map(items => (
                <li>{items}</li>
              ))}
            </ul>
            <Link to="/tangemere-road">
              <Button className="one">View Project</Button>
            </Link>
          </Col>
          <Col lg="6">
            <h3>
              Other second floor addition projects in East York, Mississauga
              &amp; Toronto
            </h3>
            <Link to="/projects">
              <Button className="secondary" aria-label="View All">
                View All Projects
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      {/* Intro */}
      <Container className="pd-80">
        <Row>
          <Col lg="6">
            <h2>
              Are you planning to undertake{" "}
              <strong>second floor additions in East York</strong>?
            </h2>
            <p>
              Adding a second floor to your home means more space, you enjoy a
              better airflow and boost the property value, and consequently your
              long-term equity position. Adding an entire story Can feel
              overwhelming. This is why you need to hire a qualified
              professional, who will take off the seemingly heavy load of second
              floor addition.
            </p>
            <p>
              For professional{" "}
              <a
                href="https://en.wikipedia.org/wiki/Modular_addition"
                target="_blank"
              >
                second floor additions
              </a>{" "}
              in East York, contact Cass-A-Bella Construction. With over 15
              years in building and construction, we have the experience and
              shall transform your property into your dream home. Why choose us
              for second floor additions in Mississauga?
            </p>
          </Col>
          <Col lg="6">
            <p>
              Please fill out the form and we will get back to you as soon as
              possible.
            </p>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      {/* Testimonial */}
      <div className="container-fluid testimonial">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h4>
                "Really great experience with Cass-a-Bella construction. My
                second floor addition was done on time and on budget."
              </h4>
              <p>- Chad Waterman</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Meet The Team */}
      <div className="meet-team">
        <SectionTwo />
      </div>
      {/* Content One*/}
      <Container className="pd-80">
        <Row>
          <Col lg="6">
            <h4>Complete Construction Services Under One Roof</h4>
            <p>
              At Cass-A-Bella Construction, we remain your one-stop-shop for all
              your construction requirements. Thus, we will help you through
              second floor designing, drawing of architectural plans, and
              complete the construction of second floor addition. You do not
              have to look elsewhere, as our experienced professionals will
              provide in- house solutions through different phases of second
              floor addition.
              <br />
              <br />
              As a one-stop-shop for all your construction needs in East York,
              we will fast track every stage ensuring timely delivery.
            </p>
          </Col>
          <Col lg="6">
            <h4>
              We Bring in Professionalism and High-Level Second Floor Addition
              Experience
            </h4>
            <p>
              Second floor addition Toronto is an involving undertaking,
              requiring keen attention to every detail. This is right from floor
              planning to nailing down the roof. In that regard, it is advisable
              that you hire an experienced and reliable contractor. At
              Cass-A-Bella Construction, we ensure professionalism and bring in
              years of experience. Our project engineers, architects, and
              homebuilders have a professional qualification and come with years
              of experience.
              <br />
              <br />
              Thus, our professionals shall help you to visualize the final
              project of second floor additions in East York even before the
              construction has started.
            </p>
          </Col>
        </Row>
      </Container>
      {/* Content Two*/}
      <div className="grey-bg">
        <Container>
          <Row>
            <Col lg="6">
              <h4>Licensed Homebuilders and Quality Materials</h4>
              <p>
                By hiring our licensed homebuilders, homeowners can takeout the
                guesswork, out of the second story addition in east York.
                Cass-A-Bella Construction shall ensure that your project runs
                smoothly and meets all requirements by the city and federal
                government.
                <br />
                <br />
                Our licensed homebuilders have undergone proper training and
                acquired the knowledge needed to ensure successful second floor
                additions in East York.
              </p>
            </Col>
            <Col lg="6">
              <h4>
                Cost-Effective and Timely Project Completion For Your Second
                Floor Addition
              </h4>
              <p>
                At Cass-A-Bella Construction, we understand the importance of
                ensuring the second floor additions in East York will be
                completed as scheduled. Moreover, we are a budget conscious
                second room addition contractor.
                <br />
                <br />
                Before the project begins, we listen to customers requirements
                in terms of project timeline. Thus, we come up with a proper
                project plan to ensure that the project is complete on time.
                Moreover, we ensure competitive bids, guaranteeing your project
                is completed on budget.
                <br />
                <br />
                For successful second floor additions in East York, Contact
                Cass-A-Bella Construction. We are professional building
                contractors, committed to ensuring timely project completion and
                within the budget.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Guarentee*/}
      <div className="meet-team">
        <SectionThree />
      </div>
      {/* Things To Do */}
      <Container className="things-to-do">
        <Row>
          <Col lg="12">
            <h2>Things To Do In East York</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92302.9308732462!2d-79.40297042582884!3d43.70085166738155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc5f55fc8bd1%3A0x8f51a4fd0f97e031!2sEast%20York%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1592060806087!5m2!1sen!2sca"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <p>
              East York is a former suburb of Toronto and largely a residential
              area. East York offers exciting sightseeing sceneries, and enjoys
              a great landscape, perfect for biking.
              <br />
              <br />
              If you love nature, Taylor Creek Park is the natural gem. With
              biking and hiking trails, you can look up to a fun-filled day
              within the Park. For lovers of winter activities, Dieppe Park
              features an ice rink and it is one of the extremely popular parks
              during winter. The park is famous for winter skating activities
              within East York.
              <br />
              <br />
              Stan Wadlow Clubhouse is perfect for the whole family. There is a
              huge playground suitable for kids fun activities and is a
              pet-friendly park in East York. Ideally, there are dozens of
              amazing sceneries around East York. Thus, if you are looking for
              the best things to do in East York, get ready for a fun-filled
              experience.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    {/* CTA */}
    <section id="cta">
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h2>
              Need a second floor addition done in the East York, Mississauga or
              Toronto area?
            </h2>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </Layout>
)

export default SecondFloorAdditionsEastYork
