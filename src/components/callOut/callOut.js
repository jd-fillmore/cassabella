import React from "react"

import "../callOut/call-out.scss"

const callOut = props => {
  return (
    <div className="call-out">
      <h2>{props.text}</h2>
      <hr />
      <p>{props.subText}</p>
      <img src={props.image} alt={props.alt} />
    </div>
  )
}

export default callOut
