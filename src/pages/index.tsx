import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MusicList from "../components/pages/home/MusicList"

import ReactHowler from "react-howler"

const IndexPage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const play = () => setIsPlaying(!isPlaying)
  const data = useStaticQuery(graphql`
    {
      allFlamelinkMusicContent {
        nodes {
          audioFile {
            url
          }
          flamelink_id
          date
          description
          singer
          title
        }
      }
    }
  `)
  console.log("====================================")
  console.log(data)
  console.log("====================================")

  const Items = data.allFlamelinkConsultationContent.nodes

  console.log("====================================")
  console.log(Items)
  console.log("====================================")

  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {Items.map(value => (
          <li>
            <ReactHowler
              src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
              playing={isPlaying}
              loop={true}
            />
            <button onClick={play}>Toggle Play</button>
          </li>
        ))}
      </ul>
      <MusicList />
    </Layout>
  )
}

export default IndexPage
