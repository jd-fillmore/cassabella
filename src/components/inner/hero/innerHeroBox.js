import React from "react"

import "../hero/inner-hero-box.scss"

const InnerHeroBox = props => {
  return (
    <div>
      <section id="box">
        <h1>{props.title}</h1>
        <p>Cass-A-Bella Construction</p>
        <a href="tel:(416) 241 - 3471">(416) 241 - 3471</a>
      </section>
    </div>
  )
}

export default InnerHeroBox
