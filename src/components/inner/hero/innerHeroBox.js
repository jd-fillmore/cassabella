import React from "react"

import "../hero/inner-hero-box.scss"

const InnerHeroBox = props => {
  return (
    <div>
      <section id="box">
        <h1>{props.title}</h1>
        <p>Cass-A-Bella Construction</p>
      </section>
    </div>
  )
}

export default InnerHeroBox
