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

const bucketBase = "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/";
const images = [
  "2Z0A6448.jpg",
  "2Z0A6821.jpg",
  "2Z0A6930.jpg",
  "lakodalom134.jpg",
  "lakodalom211.jpg",
  "2Z0A6455.jpg",
  "2Z0A6823.jpg",
  "lakodalom145.jpg",
  "lakodalom220.jpg",
  "2Z0A6460.jpg",
  "2Z0A6886.jpg",
  "kisvofely.mp4",
  "lakodalom16.jpg",
  "lakodalom266.jpg"
];

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Seo title="Főoldal" />


      <section className="bg-white py-8 text-gray-800">
        <div className="container max-w-5xl mx-auto m-8">

          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Halljunk szót!</h1>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <Intro />

              </div>
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
