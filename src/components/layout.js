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
import { Mail, Phone, Facebook } from "react-feather";
import Logo from "../images/kk_logo.svg";

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

  const phone = {
    value: "+36308161998",
    display: "+36 30 816 1998",
  };
  const email = {
    value: "info@konradvofely.hu",
    display: "info@konradvofely.hu",
  };
  const facebook = {
    value: "kovacskonradvofely",
    display: "@kovacskonradvofely",
  };

  return (
    <div
      className="leading-normal tracking-normal text-white vsc-initialized"
      style={{
        background: bgColor1, /* fallback for old browsers */
        background: `-webkit-linear-gradient(to right, ${bgColor1}, ${bgColor2})`, /* Chrome 10-25, Safari 5.1-6 */
        background: `linear-gradient(to right, ${bgColor1}, ${bgColor2})`, /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
      id="landing"
    >
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <div className="sm:pt-28">
          <div className="flex flex-wrap place-content-evenly flex-row aflex-wrap-reverse">
            <div className="w-full py-6 flex flex-nowrap justify-center sm:w-1/3 z-10">
              <div className="logo-wrapper">
                <img className="logo" src={Logo} />
                <h1 className="logo-text">
                  <p>onrád</p>
                </h1>
              </div>
            </div>
            <div className="py-6 sm:py-0 sm:w-1/3 z-0">
              <div className="py-40">
                <ProfileImage />
              </div>
            </div>
            <div className="flex flex-wrap flex-col pb-16 sm:pb-0 sm:w-1/3 z-10">
              <div className="flex-1 pt-12 text-xl text-center">
                <p><a href={"mailto:" + email.value}><Mail style={{ display: "inline" }} /><span className="pl-2">{email.display}</span></a></p>
                <p><a href={"tel:" + phone.value}><Phone style={{ display: "inline" }} /><span className="pl-2">{phone.display}</span></a></p>
                <p><a href={"https://facebook.hu/" + facebook.value} target="_blank"><Facebook style={{ display: "inline" }} /><span className="pl-2">{facebook.display}</span></a></p>
              </div>
            </div>
          </div>
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
