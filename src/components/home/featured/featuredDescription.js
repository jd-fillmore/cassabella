import React from "react"
import Button from "../../button/button"
import { Link } from "gatsby"

const FeaturedDescription = props => {
  const descriptionBullets = [
    "New Home",
    "Two car tendon garage with access to main house",
    "Large kitchen area with full glass wall in the back of the house looking to ravine backyard",
    "Open raised stair case with glass railings",
    "10 ft ceiling main floor",
    "9 ft second floor",
    "And more..",
  ]
  return (
    <div data-aos="fade-right" data-aos-delay="200">
      <h2>{props.title}</h2>
      <ul>
        {descriptionBullets.map(bullets => (
          <li>{bullets}</li>
        ))}
      </ul>
      <Link to="/nesbit-drive">
        <Button>View Project</Button>
      </Link>
    </div>
  )
}

export default FeaturedDescription
