import React from "react"

import MusicCard from "./MusicCard"

import "./styles.css"

const MusicList = data => {
  const Items = data.data
  return (
    <div className="grid">
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
      <MusicCard data={Items} />
    </div>
  )
}

export default MusicList
