/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Helmet } from "react-helmet"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC}) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
      }
    }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={
            [
              { name: 'description', content: data.site.siteMetadata.description},
              { name: 'keywords', content: data.site.siteMetadata.keywords},
            ]
          }
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}

        <Footer data={data}>
          Backgrounds made in Cinema 4D, iOS app in Swift, site in React.
          <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2018
        </Footer>
      </>
    )}
  />
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
