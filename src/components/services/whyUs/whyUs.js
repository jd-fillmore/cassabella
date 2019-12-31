import React from "react"

import "../whyUs/why-us.scss"

const WhyUs = () => {
  const whyUsItems = [
    "Years of experience",
    "On-time completion",
    "Cost-effective services",
    "Customer focused",
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
