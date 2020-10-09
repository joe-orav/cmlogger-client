import React, { useState } from "react"
import { SDLink } from "../components/defaultLink"
import SitePageWrapper, { Para } from "../components/layouts/sitePageWrapper"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Contact() {
  const [formStatus, setFormStatus] = useState("")

  function handleFormSubmission(ev) {
    setFormStatus("Submitting form...")
    ev.preventDefault()

    async function submitData() {
      const form = ev.target
      const data = new FormData(form)

      let myHeaders = new Headers({
        Accept: "application/json",
      })

      try {
        let res = await fetch("https://formspree.io/f/maylqaky", {
          headers: myHeaders,
          method: "POST",
          body: data,
        })

        if (res.ok) setFormStatus("Thank you! Your message has been sent.")
        else
          setFormStatus(
            "There was an issue submitting your message. Please try again later."
          )

        form.reset()
      } catch (err) {
        setFormStatus("There was an issue processing this request")
      }
    }

    submitData()
  }

  return (
    <SitePageWrapper title="Contact">
      <Para>
        Use the form below to report any bugs or issues you come across while
        using the app. Any feedback or feature suggestions you may have is also
        appreciated!
      </Para>
      <Para>
        CMLogger is developed and maintained by{" "}
        <SDLink href="https://josephoravbiere.com/" target="__blank">
          Joseph Oravbiere
        </SDLink>
        .
      </Para>
      <Form className="py-3" onSubmit={handleFormSubmission}>
        <Form.Group controlId="email">
          <Form.Control type="email" name="email" placeholder="Email address" />
        </Form.Group>
        <Form.Group controlId="message-area">
          <Form.Control
            as="textarea"
            rows="8"
            name="message"
            placeholder="Enter message"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="d-block mx-auto my-0"
        >
          Submit
        </Button>
      </Form>
      {formStatus && <Para className="text-center pb-0">{formStatus}</Para>}
    </SitePageWrapper>
  )
}

export default Contact
