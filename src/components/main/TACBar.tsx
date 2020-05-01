import React from "react"
import { MDBAlert } from "mdbreact"

const AlertPage = () => {
  return (
    <MDBAlert color="warning">
      This website could also include unlicensed copyright items, and we are not
      legally responsible for this website.{" "}
      <a href="https://himadu.me/sinhala-music/tos" className="alert-link">
        TOS
      </a>{" "}
      And if you don't agree with this or TOS please leave this site immediatly.
    </MDBAlert>
  )
}

export default AlertPage
