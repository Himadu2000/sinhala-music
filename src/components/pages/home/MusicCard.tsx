import React, { useState } from "react"

import ReactHowler from "react-howler"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBIcon,
} from "mdbreact"

const Player = data => {
  const [isPlaying, setIsPlaying] = useState(false)
  const play = () => setIsPlaying(!isPlaying)
  const item = data.data
  return (
    <MDBCard narrow>
      <MDBCardImage
        className="view view-cascade gradient-card-header purple-gradient"
        cascade
        tag="div"
      >
        <h2 className="h2-responsive">Mattonit</h2>
        <p>The Boar</p>
        <div className="text-center">
          <MDBBtn color="purple" floating size="sm">
            <MDBIcon icon="arrow-down" />
          </MDBBtn>
          <MDBBtn color="purple" floating size="sm">
            <MDBIcon icon="play" />
          </MDBBtn>
          <MDBBtn color="purple" floating size="sm">
            <MDBIcon icon="stop" />
            <MDBIcon icon="plus" />
          </MDBBtn>
        </div>
        <MDBBtn color="purple" floating size="sm">
          <MDBIcon icon="plus" />
        </MDBBtn>
      </MDBCardImage>
      <MDBCardBody cascade className="text-center">
        <MDBCardText>
          Lorem ipsum dolor sit. .
          <li>
            <ReactHowler
              src={item.audioFile.url}
              playing={isPlaying}
              preload={false}
              loop={false}
              onLoadError={error => console.log(error)}
            />
            <button onClick={play}>Toggle Play</button>
          </li>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Player
