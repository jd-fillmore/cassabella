import React from "react"
import { Button } from "reactstrap"
import { Link } from "gatsby"

const HeroBox = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>The art of design, build and renovate.</h2>
      <p>
        15 years of professional art, design and build experience. Let
        Cass-A-Bella Construction show you how to transform your home into an
        art sculpture.
      </p>
      <Link to="/projects">
        <Button aria-label="button">View Projects</Button>
      </Link>
    </div>
  )
}

export default HeroBox
