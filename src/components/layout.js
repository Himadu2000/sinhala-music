/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

//import Navigation from "./main/navigation"
import TAC from "./main/TACBar"
import Footer from "./main/footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <TAC />
      <main>{children}</main>
      <Footer className="footer" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
