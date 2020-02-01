import React from "react"

import "../whyUs/why-us.scss"

const WhyUs = () => {
  const whyUsItems = [
    "Guaranteed completion dates",
    "Guaranteed cost-effective services",
    "Guaranteed certified mechanical trades",
    "Guaranteed custom design standards",
  ]
  return (
    <div>
      <section id="why-us">
        <h4>Why Us?</h4>
        <ul>
          {whyUsItems.map(items => (
            <li>{items}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default WhyUs
