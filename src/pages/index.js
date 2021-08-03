import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SvgBottom, SvgTop } from "../components/svg";
import Intro from "../components/intro";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import Video from "../components/video";

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Seo title="Főoldal" />


      <section className="bg-white py-8 text-gray-800">
        <div className="container max-w-5xl mx-auto m-8">

          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Halljunk szót!</h1>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 mt-6">
              <Intro />
            </div>
            <div className="w-full sm:w-1/2 mt-6">
              <Video />
            </div>
          </div>

        </div>
      </section>
      <SvgTop />

      <section className="py-8">
        <Gallery />
      </section>
      <SvgBottom />

      <section className="py-8 bg-white text-gray-800">
        <Contact />
      </section>

    </Layout>
  </ParallaxProvider>
)

export default IndexPage
