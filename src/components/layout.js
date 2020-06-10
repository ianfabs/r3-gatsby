/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {PageHeading, PageTitle} from "./utils"
import Header from "./header"
import "../fonts/fabian/fabian.css";
import "./layout.css"

const Layout = ({ children, pageHeading }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        {pageHeading ?? <PageHeading/>}
        <main style={{
          margin: `0 8vmin`,
          maxWidth: 960,
        }}>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()}, R3 Media LLC. 
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
