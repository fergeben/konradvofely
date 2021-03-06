import React, { useEffect, useState } from "react"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SvgBottom, SvgTop } from "../components/svg";
import Intro from "../components/intro";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import VideoGallery from "../components/videoGallery";
import Video from "../components/video";
import { CheckCircle } from "react-feather";
import PageLoader from "../components/pageLoader";
import About from "../components/about";
import TestimonialSection from "../components/testimonialSection";
import NavBar from "../components/NavBar";
import MentorsSection from "../components/mentorsSection";

const pin = "484157";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(false);
  useEffect(() => {
    if (locked) {
      let _locked = true;
      while (_locked) {
        const val = prompt("PIN");
        if (pin === val) {
          alert("Feloldva!");
          _locked = false;
          setLocked(false);
        } else {
          alert("Hibás PIN!");
        }
      }
    }
    setLoading(false);
  }, []);
  const activities = [
    "Vőfély feladatok ellátása",
    "Mulattatás",
    "Örök emlék",
  ];

  const Activities = () => activities.map(a => (
    <p className="text-xl">
      <CheckCircle className="mr-2 my-3" style={{ display: "inline" }} />{a}
    </p>
  ));

  if (locked)
    return <div>Hozzáférés megtagadva!</div>;

  return (
    <ParallaxProvider>
      <NavBar />
      <Layout>
        <Seo title="Főoldal" />
        <PageLoader loading={loading} />
        <section id="feladataim" className="bg-white pt-40 pb-40 sm:pt-16 sm:pb-24 text-gray-800 px-2" style={{ position: "relative" }}>
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <div className="container max-w-5xl mx-auto m-8">
              <h1 className="w-full my-2 text-5xl leading-tight text-center text-gray-800 pt-16">Üdvözlöm!</h1>
              <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="mt-16 sm:mt-6 flex flex-row flex-wrap">
                  <h3 className="w-full text-3xl text-gray-800 leading-none mb-3">Feladataim</h3>
                  <div className="">
                    <Activities />
                  </div>
                </div>
                <div className="mt-6 flex-1 pb-24 sm:pt-0 sm:pb-0">
                  <h3 className="text-3xl text-gray-800 leading-none mb-3">Bemutatkozó videó</h3>
                  <Video />
                </div>
              </div>
            </div>
          </Parallax>
        </section>

        <SvgTop />
        <section className="py-8 mx-2" id="galeria">
          <div className="container max-w-5xl mx-auto flex flex-wrap flex-row justify-center">
            <h2 className="pb-4">Galéria</h2>
            <Gallery />
          </div>
          <div className="container text-center">
            <h2 className="pb-4 pt-8">Videók</h2>
            <VideoGallery />
          </div>
        </section>
        <SvgBottom />

        <section className="px-2 py-20 sm:pb-40 md:pb-56 md:pt-20 bg-white text-gray-800" id="velemenyek">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <div className="container max-w-5xl mx-auto flex flex-wrap flex-row content-evenly">
              <div className="sm:w-1/1">
                <TestimonialSection />
              </div>
            </div>
          </Parallax>
        </section>

        <SvgTop />
        <section className="py-8 mx-2" id="magamrol">
          <div className="container max-w-5xl mx-auto flex flex-wrap flex-row justify-center">
            <div className="sm:w-1/2 py-8">
              <About />
            </div>
          </div>
        </section>
        <SvgBottom />

        <section className="px-2 py-96 sm:py-40 md:pt-0 md:pb-20 lg:pt-0 lg:pb-8 bg-white text-gray-800" id="kapcsolat">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <div className="container max-w-5xl mx-auto flex flex-wrap flex-row justify-center">
              <div className="sm:w-1/2 self-center">
                <Intro />
              </div>
              <div className="sm:w-1/2 py-8">
                <Contact />
              </div>
              <MentorsSection />
            </div>
          </Parallax>
        </section>

      </Layout>
    </ParallaxProvider>
  );
}

export default IndexPage
