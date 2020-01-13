import React from "react"

const ContactForm = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div class="form-group">
          <input
            name="name"
            type="name"
            class="form-control"
            id="Name"
            aria-describedby="namehelp"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="form-group">
          <input
            name="email"
            type="email"
            class="form-control"
            id="Email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            name="phone"
            type="tel"
            class="form-control"
            id="Phone"
            placeholder="Phone Number"
            required
          />
        </div>
        <div class="form-group">
          <textarea
            name="message"
            class="form-control"
            id="Message"
            rows="3"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </div>
  )
}

export default ContactForm
