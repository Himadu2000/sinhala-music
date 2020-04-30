import React, { useState } from "react"
import { Link } from "gatsby"

import ReactHowler from "react-howler"

const IndexPage = data => {
  const [isPlaying, setIsPlaying] = useState(false)
  const play = () => setIsPlaying(!isPlaying)
  const item = data.data
  return (
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
  )
}

export default IndexPage
