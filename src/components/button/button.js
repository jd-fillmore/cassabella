import React from "react"
import "../button/button.scss"

const Button = props => {
  return (
    <div>
      <button className={props.className}>{props.children}</button>
    </div>
  )
}

export default Button
