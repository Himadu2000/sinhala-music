import React from "react"
import { MDBContainer, MDBAlert } from "mdbreact"

const AlertPage = () => {
  return (
    <MDBContainer>
      <MDBAlert color="primary">
        A simple primary alert with{" "}
        <a href="#!" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="secondary">
        A simple primary alert with{" "}
        <a href="#!" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </MDBAlert>
    </MDBContainer>
  )
}

export default AlertPage
