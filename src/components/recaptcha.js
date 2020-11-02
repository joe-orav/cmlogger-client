import React, { useEffect } from "react"

export default ({ siteKey }) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      let appendedDiv = document.body.querySelectorAll("body>div")[1]
      if (appendedDiv) {
        document.body.removeChild(appendedDiv)
      }
    }
  })
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="g-recaptcha" data-sitekey={siteKey}></div>
    </div>
  )
}
