import React from "react"

const ContactLegal = () => {
  const benefitsList = [
    "Only the largest addition builder in the GTA can make you this offer",
  ]
  return (
    <div>
      <p>
        Cass-A-Bella Construction is committed to ensuring that the collection
        and processing of your data, carried out from our site
        cass-a-bellaconstruction.com, complies with the general data protection
        regulations (RGPD) and the Data Protection Act. To know and exercise
        your rights, including withdrawing your consent to the use of data
        collected by this form, please consult our{" "}
        <a href="/privacy">privacy policy</a>
      </p>
      <ul>
        {benefitsList.map(list => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContactLegal
