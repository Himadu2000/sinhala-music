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

  const Items = data.allFlamelinkMusicContent.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {Items.map(item => (
          <li>
            <ReactHowler
              src="https://storage.googleapis.com/sinhala-music.appspot.com/flamelink/media/Dua%20Lipa.mp3?GoogleAccessId=firebase-adminsdk-5njpr%40sinhala-music.iam.gserviceaccount.com&Expires=16725200400&Signature=fD41SfxnUSjwpM%2FmwR0eRnr1G6s1jC1kQNxm1jfz464qcsVEPjH633zD4wQDQvejQyl%2B5I8ysNDTWfejQDp21%2BUJ95tsm5LfRXwiUwawEDxzahe8czDv5t4t6vBknledRyrD7OymeXN7MZOQwL%2FHDBojvE72Vxfnv%2F3HLRKA78oihUBiqSgMTMM9Nzdwx4tdoGtluJL%2BPmQSer%2FX7WRklSK0qIdSNowfB8BQ%2B7pf2ZY3FvOy6UOO1UdO3xLx0G7iWxgYUXw%2BXm%2BxSf9baP%2FnELJXeZswp0bxVL4W%2B%2FEoVHbjnNM5RXrJxXF5lJHGT2GduFV0AWvHPeXFDW0qGGe3iQ%3D%3D"
              playing={isPlaying}
              loop={true}
            />
            <button onClick={play}>Toggle Play</button>
          </li>
        ))}
      </ul>
      <MusicList data={Items} />
    </Layout>
  )
}

export default IndexPage
