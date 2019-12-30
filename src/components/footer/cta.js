import React from "react"
import { Link } from "gatsby"
import { Button } from "reactstrap"

const CTA = () => {
  return (
    <div>
      <h2>Have a home renovation project in mind?</h2>
      <Link to="/contact">
        <Button>Get A Quote</Button>
      </Link>
    </div>
  )
}

export default CTA
