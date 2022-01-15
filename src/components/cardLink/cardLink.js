import React from "react"
import { Link } from "gatsby"

import "./card-link.scss"

const CardLink = ({ image, imageAlt, link, btnText }) => {
  return (
    <>
      <div className="card-link">
        <img className="img-fluid" src={image} alt={imageAlt} />
        <Link to={link}>
          <button>{btnText}</button>
        </Link>
      </div>
    </>
  )
}

export default CardLink
