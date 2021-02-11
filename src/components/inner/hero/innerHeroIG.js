import React from "react"
import InnerHeroBox from "../hero/innerHeroBox"
import { Container, Row, Col } from "reactstrap"

import "../hero/inner-hero.scss"

const InnerHeroIG = props => {
  return (
    <div>
      <section id="inner-hero" className="ig-hero">
        <Container>
          <Row className="text-center">
            <Col lg="6">
              <InnerHeroBox title={props.title} />
            </Col>
            <Col lg="6">
              <p className="ig">
                Come from Instagram and interested in a second floor addition?
                Plese fill out the form below and we'll get back to you ASAP.
              </p>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div class="form-group">
                  <input
                    name="name"
                    aria-label="name"
                    type="name"
                    class="form-control"
                    id="Name"
                    aria-describedby="namehelp"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    aria-label="email"
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    name="phone"
                    aria-label="phone"
                    type="tel"
                    class="form-control"
                    id="Phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    aria-label="message"
                    class="form-control"
                    id="Message"
                    rows="3"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button type="submit" aria-label="button">
                  Submit
                </button>
                <input type="hidden" name="bot-field" aria-label="bot-field" />
                <input
                  type="hidden"
                  name="form-name"
                  aria-label="form-name"
                  value="contact"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default InnerHeroIG
