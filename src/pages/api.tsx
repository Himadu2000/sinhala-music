import React from "react"
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact"

const Player = () => (
  <MDBContainer>
    <MDBRow>
      <MDBCol>
        <MDBJumbotron style={{ padding: 0 }}>
          <MDBCol
            className="text-white text-center py-5 px-4 my-5"
            style={{
              backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
            }}
          >
            <MDBCol className="py-5">
              <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                Our API for development
              </MDBCardTitle>
              <div className="mx-5 mb-5">
                <p>
                  You can connect to our flamelink data API through these
                  credentials!
                </p>
                <> apiKey: "AIzaSyDWHcUtFU9jVz9QqQOXbvi7BtKCDmEKd7U",</>
                <> authDomain: "sinhala-music.firebaseapp.com",</>
                <> databaseURL: "https://sinhala-music.firebaseio.com",</>
                <> projectId: "sinhala-music",</>
                <> storageBucket: "sinhala-music.appspot.com",</>
                <>messagingSenderId: "545439947091",</>
                <> appId: "1:545439947091:web:bddced9405a7171ada29a6",</>
                <> measurementId: "G-QW4SB7KWCK",</>
              </div>
            </MDBCol>
          </MDBCol>
        </MDBJumbotron>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default Player
