import React from "react"
import { MDBContainer, MDBAlert } from "mdbreact"

const AlertPage = () => {
  return (
    <MDBContainer>
      <MDBAlert color="warning">
        This website could also include unlicensed copyright items, and we are
        not legally responsible for this website.{" "}
        <a href="https://himadu.me/sinhala-music/tos" className="alert-link">
          TOS
        </a>{" "}
        And if you don't agree with this or TOS please leave this site
        immediatly.
      </MDBAlert>{" "}
      <MDBAlert color="info">You will need to double click to play.</MDBAlert>
    </MDBContainer>
  )
}

export default AlertPage
