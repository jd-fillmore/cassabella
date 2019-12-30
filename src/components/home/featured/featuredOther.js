import React from "react"
import Button from "../../button/button"
import { Link } from "gatsby"

const FeaturedOther = props => {
  return (
    <div data-aos="fade-right" data-aos-delay="400">
      <h3>{props.title}</h3>
      <Link to="/projects">
        <Button className="secondary" aria-label="View All">
          {props.buttonText}
        </Button>
      </Link>
    </div>
  )
}

export default FeaturedOther
