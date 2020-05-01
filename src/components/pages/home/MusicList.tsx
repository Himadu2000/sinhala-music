import React, { useState } from "react"
import { MDBBtn, MDBIcon } from "mdbreact"

import ReactHowler from "react-howler"

import MusicCard from "./MusicCard"
import PlayList from "./PlayList"

import "./styles.css"

const MusicList = data => {
  const Items = data.data
  //const Amaradewa = {}
  //if (Items.map(unit => (unit.singer = "W D Amaradewa"))) {
  //Amaradewa =
  //}
  const [isPlaying, setIsPlaying] = useState(false)
  const [icon, setIcon] = useState("play")
  function play() {
    setIsPlaying(!isPlaying)
  }
  return (
    <>
      <PlayList />
      <MDBBtn onClick={play}>
        Play All
        <MDBIcon icon={icon} />
      </MDBBtn>
      <p className="name">W D Amaradewa</p>
      <ul className="grid">
        {Items.map(item => (
          <li
            key={
              //Items.map(unit => unit.title)
              Math.random() * 1000 * Math.random() +
              Math.random() * Math.pow(24, 42) * 50
            }
          >
            <MusicCard data={item} />
          </li>
        ))}
      </ul>
      {/**    <ReactHowler
        src={Items.map(unit => unit.audioFile.map(itemMap => itemMap.url))}
        playing={isPlaying}
        preload={false}
        html5={true}
        onPlay={() => setIcon("stop")}
        onPause={() => setIcon("play")}
        onStop={() => setIcon("play")}
        onLoadError={error => console.error(error)}
      /> */}
    </>
  )
}

export default MusicList
