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
  const [icon, setIcon] = useState("play")
  const play = () => setIsPlaying(!isPlaying)
  const item = data.data
  const source = item.audioFile.map(itemMap => itemMap.url)

  function AddToPlayList() {
    console.log("Added")
  }

  return (
    <MDBCard narrow>
      <MDBCardImage
        className="view view-cascade gradient-card-header purple-gradient"
        cascade
        tag="div"
      >
        <h2 className="h2-responsive">{item.title}</h2>
        <p>{item.singer}</p>
        <div className="text-center">
          <MDBBtn color="purple" floating size="sm" onClick={() => play}>
            <MDBIcon icon={icon} />
          </MDBBtn>
          <MDBBtn color="purple" floating size="sm" onClick={AddToPlayList}>
            <MDBIcon icon="plus" />
          </MDBBtn>
          <MDBBtn color="purple" floating size="sm" download={source}>
            <MDBIcon icon="arrow-down" />
          </MDBBtn>
        </div>
      </MDBCardImage>
      <MDBCardBody cascade className="text-center">
        <MDBCardText>
          {item.description}
          <ReactHowler
            src={source}
            playing={isPlaying}
            preload={isPlaying}
            loop={false}
            onPlay={() => setIcon("stop")}
            onStop={() => setIcon("play")}
            onLoadError={error => console.error(error)}
          />
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Player
