import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

const Footer = () => {
  return (
    <MDBFooter
      color="elegant-color"
      className="page-footer font-small lighten-5 pt-0"
    >
      <div style={{ backgroundColor: "#21d192" }}>
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <p>Sorry no Social Media Available</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 white-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Sinhala Music</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              Sinhala Music is here to promote Sinhala Classical music to future
              as there's no good music for society. This site does not legally
              oblige any owners of the music as many of them are dead! So if you
              do not like to use Unlicense or legal problems please leave this
              site. And let us preserve our culture and hope we get another good
              musician to our generation.
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 white-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a
                href="https://himadu.me/sinhala-music/contact"
                className="white-text"
              >
                Contact Us
              </a>
            </p>
            <p>
              <a
                href="https://himadu.me/sinhala-music/api"
                className="white-text"
              >
                API
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 white-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> Colombo, Example 01022, Sri
              Lanka
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> notavailable@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 94 11 1111 111
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer
