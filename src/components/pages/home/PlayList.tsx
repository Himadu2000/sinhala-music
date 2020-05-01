import React, { useState } from "react"
import { MDBBtn, MDBIcon } from "mdbreact"
import ReactHowler from "react-howler"
import "./styles.css"

const PlayList = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [PlayData, setPlayData] = useState("")
  function play() {
    setIsPlaying(true)
  }
  if (typeof window !== "undefined") {
    setPlayData(localStorage.getItem("playList"))
  }
  return (
    <>
      <div className="flex">
        <p className="name">Play your PlayList...</p>
        <MDBBtn color="purple" floating size="sm" onClick={() => play()}>
          <MDBIcon icon="play" />
        </MDBBtn>
        <p className="name">Delete your PlayList...</p>
        <MDBBtn
          color="purple"
          floating
          size="sm"
          onClick={() => localStorage.removeItem("playList")}
        >
          <MDBIcon icon="trash" />
        </MDBBtn>
      </div>
      <ReactHowler
        src={PlayData}
        playing={isPlaying}
        preload={false}
        html5={true}
        onLoadError={error => console.error(error)}
      />
    </>
  )
}

export default PlayList
