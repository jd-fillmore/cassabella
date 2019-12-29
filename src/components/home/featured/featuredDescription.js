import React from "react"

const FeaturedDescription = props => {
  const descriptionBullets = [
    "New second floor addition",
    "Full gut out on existing floor",
    "Raised first floor to 9 ft",
    "New kitchen",
    "New stone work",
  ]
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {descriptionBullets.map(bullets => (
          <li>{bullets}</li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedDescription
