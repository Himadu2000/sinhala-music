import React, { useState } from "react"
import { Link } from "gatsby"

import ReactHowler from "react-howler"

import Example from "./Exmaple"

const IndexPage = data => {
  const [isPlaying, setIsPlaying] = useState(false)
  const play = () => setIsPlaying(!isPlaying)
  const Items = data.data
  return (
    <ul>
      <Example />
      {Items.map(item => (
        <li>
          <ReactHowler
            src={item.audioFile.url}
            playing={isPlaying}
            preload={false}
            loop={true}
          />
          <button onClick={play}>Toggle Play</button>
        </li>
      ))}
    </ul>
  )
}

export default IndexPage
