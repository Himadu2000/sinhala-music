import React from "react"

import MusicCard from "./MusicCard"

import "./styles.css"

const MusicList = data => {
  const Items = data.data
  return (
    <>
      <p>Amaradewa</p>
      <ul className="grid">
        {Items.map(item => (
          <li key={Items.flamelink_id}>
            <MusicCard data={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default MusicList
