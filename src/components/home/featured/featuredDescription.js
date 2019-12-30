import React from "react"
import Button from "../../button/button"
import { Link } from "gatsby"

const FeaturedDescription = props => {
  const descriptionBullets = [
    "New second floor addition",
    "Full gut out on existing floor",
    "Raised first floor to 9 ft",
    "New kitchen",
    "New stone work",
  ]
  return (
    <div data-aos="fade-right" data-aos-delay="200">
      <h2>{props.title}</h2>
      <ul>
        {descriptionBullets.map(bullets => (
          <li>{bullets}</li>
        ))}
      </ul>
      <Link to="/woodville-ave-toronto">
        <Button>View Project</Button>
      </Link>
    </div>
  )
}

export default FeaturedDescription
