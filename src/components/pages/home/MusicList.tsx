import React from "react"

import MusicCard from "./MusicCard"

import "./styles.css"

const MusicList = data => {
  const Items = data.data
  return (
    <div>
      <p color="white">Amaradewa</p>
      <ul className="grid">
        {Items.map(item => (
          <MusicCard data={item} />
        ))}
      </ul>
    </div>
  )
}

export default MusicList
