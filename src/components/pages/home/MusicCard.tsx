import React, { useState } from "react"

import ReactHowler from "react-howler"
import { MDBBtn, MDBCard, MDBCardImage, MDBIcon } from "mdbreact"

const Player = data => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [icon, setIcon] = useState("play")
  const item = data.data
  const source = item.audioFile.map(itemMap => itemMap.url)
  function play() {
    setIsPlaying(!isPlaying)
  }
  function AddToPlayList() {
    if (typeof window !== "undefined") {
      let previousPlayList = localStorage.getItem("playList")

      if (previousPlayList != null) {
        localStorage.setItem("playList", `"${source}",${previousPlayList}`)
      } else {
        localStorage.setItem("playList", `"${source}"`)
      }
    } else {
      console.log("This is SSR")
    }
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
          <MDBBtn color="purple" floating size="sm" onClick={() => play()}>
            <MDBIcon icon={icon} />
          </MDBBtn>
          <MDBBtn color="purple" floating size="sm" onClick={AddToPlayList}>
            <MDBIcon icon="plus" />
          </MDBBtn>
          <a href={source} download>
            <MDBBtn color="purple" floating size="sm" download={source}>
              <MDBIcon icon="arrow-down" />
            </MDBBtn>
          </a>
        </div>
      </MDBCardImage>
      <ReactHowler
        src={source}
        playing={isPlaying}
        preload={false}
        html5={true}
        onPlay={() => setIcon("stop")}
        onPause={() => setIcon("play")}
        onStop={() => setIcon("play")}
        onLoadError={error => console.error(error)}
      />
      {/*<MDBCardBody cascade className="text-center">
        <MDBCardText>{item.description}</MDBCardText>
      </MDBCardBody>*/}
    </MDBCard>
  )
}

export default Player
