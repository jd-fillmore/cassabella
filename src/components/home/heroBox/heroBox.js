import React from "react"
import { Button } from "reactstrap"
import { Link } from "gatsby"

import "../heroBox/hero-box.scss"

const HeroBox = props => {
  return (
    <div>
      <section id="hero-box">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.text}</p>
        <Link to={props.link}>
          <Button aria-label="button">{props.linkText}</Button>
        </Link>
      </section>
    </div>
  )
}

export default HeroBox
