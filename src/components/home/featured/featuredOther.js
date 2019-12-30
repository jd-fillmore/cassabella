import React from "react"
import { Button } from "reactstrap"
import { Link } from "gatsby"

const FeaturedOther = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <Link to="/projects">
        <Button aria-label="View All">{props.buttonText}</Button>
      </Link>
    </div>
  )
}

export default FeaturedOther
