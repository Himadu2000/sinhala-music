import { Link } from "gatsby"
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact"
import React from "react"

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
          <MDBCol md="4" lg="4" xl="4" className="mb-4 white-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Sinhala Music</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              Sinhala Music is here to promote Sinhala Classical music. This
              site does not legally oblige any owners of the music as many of
              them are dead! So if you do not like to use Unlicense or legal
              problems please leave this site.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 white-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <Link to="/contact" className="white-text">
              Contact Us
            </Link>
            <br />
            <Link to="/api" className="white-text">
              API
            </Link>
            <br />
            <Link to="/login" className="white-text">
              Login
            </Link>
          </MDBCol>
          <MDBCol md="4" lg="4" xl="4" className="mb-4 white-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            {/* <p>
              <i className="fa fa-home mr-3" /> Colombo, Example 01022, Sri
              Lanka
           </p> */}
            <p>
              <i className="fa fa-envelope mr-3" /> himadusirimanna.1@gmail.com
            </p>
            {/* <p>
              <i className="fa fa-phone mr-3" /> + 94 11 1111 111
           </p>*/}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer
