/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {PageHeading} from "./utils"
import Header from "./header"
import styled from "styled-components"
import "../fonts/fabian/fabian.css";
import "./layout.css"

const Footer = styled.footer`
  background: hsla(0,0%,0%,0.9);
  padding: 2vmin 8vmin;
  font-weight: 500;
  color: white;
`

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
        <Footer>
          &copy; {new Date().getFullYear()}, R3 Media LLC. 
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
