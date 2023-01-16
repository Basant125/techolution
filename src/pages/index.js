import * as React from "react"
import Layout from "../components/layout/layout"
import ContentPage from "../components/content-page/content-page"
import "../styles/fullPageOverride.css"
import "../styles/styles.css"
import Home from "../components/home/home"
import Seo from "../components/seo"
import { Link, navigate } from "gatsby"
import { useHomePageSanityData } from "../graphql/queries/home-page-queries"
import { FullscreenVideo } from "../components/full-screen-video/full-screen-video"
import trophyText from "../images/IconTophywithStarsfortheText.svg"
import { useEffect } from "react"
import { useState } from "react"
import confiteeAnimationData from "../images/Confetti Animation.json"
import trophyAnimation from "../images/trophybuildupnew.json"
import lottie from "lottie-web"
import { createRef } from "react"

const Indexpage = ({ location }) => {
  const { allSanityPage } = useHomePageSanityData()

  const handleNavigate = links => {
    navigate(`${links}`)
  }

  const [showAwards, setShowAwards] = useState(false)

  let animationContainer = createRef()
  let animationContainerConfiee = createRef()
  let anim = null
  let anim2 = null

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: trophyAnimation,
    })

    anim2 = lottie.loadAnimation({
      container: animationContainerConfiee.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: confiteeAnimationData,
    })

    return () => {
      anim2.destroy()
      anim.destroy()
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      anim2.play()
    }, 1000)

    setTimeout(() => {
      setShowAwards(true)
      anim.destroy()
      anim2.destroy()
    }, 3000)
  }, [])

  return (
    <Layout
      classNameProp="indexPage"
      location={location}
      bracketIdsProp={["bracket-image"]}
    >
      {/* <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/22817938.js"
      /> */}

      <div className="section section-0 active">
        {allSanityPage?.nodes[0].video_url != null && (
          <FullscreenVideo
            videoUrl={allSanityPage?.nodes[0].video_url}
            className={`video_home_page`}
            idList={["video_popup", "co_create_video", "fade"]}
          ></FullscreenVideo>
        )}
        <div>
          <div
            ref={animationContainerConfiee}
            className="confietee-awards-container"
          ></div>
          <Home />
          {showAwards ? (
            <Link to="/techolution-awards">
              <div className="awards-text-container">
                <img
                  src={trophyText}
                  alt="trophy-text"
                  className="text-trophy-img"
                />
                <p className="awards-text">Awards we just won</p>
              </div>
            </Link>
          ) : (
            <div ref={animationContainer} className="awards-trophy"></div>
          )}
        </div>
      </div>
      {allSanityPage.nodes[0].slide.map((pagesValue, index) => (
        <div key={index} className={`section section-${index + 1}`}>
          <ContentPage
            handleNavigate={() => handleNavigate(pagesValue.cta[0].cta_link)}
            pagesValue={pagesValue}
            isContactUsBtn={pagesValue?.cta[0]?.cta_name === "CONTACT US"}
          />
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Innovation done right" />

export default Indexpage
