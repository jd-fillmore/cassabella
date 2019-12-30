import React from "react"
import { Link } from "gatsby"

import "../card/card.scss"

const Card = props => {
  return (
    <div className="card">
      <Link to={props.cardLink}>
        <img src={props.image} alt={props.alt} />
        <div className="card-content">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
