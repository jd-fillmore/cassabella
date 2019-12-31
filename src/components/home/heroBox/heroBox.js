import React from "react"
import Button from "../../button/button"
import { Link } from "gatsby"

import "../heroBox/hero-box.scss"

const HeroBox = props => {
  return (
    <div>
      <section id="hero-box" data-aos="fade-in">
        <h1 data-aos="fade-right" data-aos-delay="200">
          {props.title}
        </h1>
        <h2 data-aos="fade-right" data-aos-delay="400">
          {props.subtitle}
        </h2>
        <p data-aos="fade-right" data-aos-delay="600">
          {props.text}
        </p>
        <Link to={props.link}>
          <div data-aos="fade-right" data-aos-delay="900">
            <Button aria-label="button">{props.linkText}</Button>
          </div>
        </Link>
      </section>
    </div>
  )
}

export default HeroBox
