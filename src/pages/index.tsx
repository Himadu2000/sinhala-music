import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MusicList from "../components/pages/home/MusicList"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFlamelinkMusicContent {
        nodes {
          audioFile {
            url
          }
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
      <MusicList data={Items} />
    </Layout>
  )
}

export default IndexPage
