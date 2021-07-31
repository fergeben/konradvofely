/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Header from "./header"
import "./layout.css"
import ProfileImage from "./profileImage"
import { SvgBottom, SvgTop } from "./svg";
import Intro from "./intro";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const bgColor1 = "#a8c0ff";
  const bgColor2 = "#3f2b96";
  return (
    <div
      className="leading-normal tracking-normal text-white vsc-initialized"
      style={{
        background: bgColor1, /* fallback for old browsers */
        background: `-webkit-linear-gradient(to right, ${bgColor1}, ${bgColor2})`, /* Chrome 10-25, Safari 5.1-6 */
        background: `linear-gradient(to right, ${bgColor1}, ${bgColor2})`, /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
    >
      {/* <div className="bg-gradient-to-r from-blue-700 via-blue-700 to-blue-700"> */}
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      {/* <h1>asd</h1> */}
      <Parallax className="custom-class" y={[-40, 20]} tagOuter="figure">
        <div className="pt-48 flex flex-wrap justify-center">
          <h1 className="flex-1 pl-40 logo-text">Kovács<br />onrád</h1>
          <ProfileImage />
        </div>
      </Parallax>

      <div className="-mt-12 lg:-mt-24">
        <SvgBottom />
      </div>

      {children}
      

      <SvgTop />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
