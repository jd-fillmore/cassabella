import React from "react"

import "../card/card.scss"

const Card = props => {
  return (
    <div className="card">
      <img src={props.image} alt={props.alt} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Card
