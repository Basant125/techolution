import * as React from "react"
import { useRef } from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useOurCustomersSanityData } from "../graphql/queries/our-customers-queries"
import { useSuccessStoriesSanityData } from "../graphql/queries/success-stories-queries"
import "../styles/success-stories.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import thmb from "../images/wawa-thmb.png"
// import nycThmb from "../images/nyc-thmb.png"
// import cwaThmb from "../images/cwa-thmb.png"
// import mediverseThmb from "../images/mediverse-thmb.png"
// import brooklynThmb from "../images/brooklyn-thmb.png"
import playIcon from "../images/play-icon.svg"
import {
  FullscreenVideo,
  openVideoPopupWithIndex,
} from "../components/full-screen-video/full-screen-video"
gsap.registerPlugin(ScrollTrigger)


const OurCustomers = ({ location }) => {
  const { sanityPage, allSanityPage } = useOurCustomersSanityData()
  const successStoriesData  = useSuccessStoriesSanityData();
  const successStories = successStoriesData?.allSanityPage?.nodes[0]?.slide;

  const revealRefs = useRef([])
  revealRefs.current = []

  var sectionIndex = 0
  const onContactUsBtnClick = () => {
    document.getElementById("heartElement").click()
  }

  React.useEffect(() => {
    if (location.search) {
      const projectParam = location.search.split("_").join(" ");
      const project = projectParam.split("=")[1]
      const verticals = sanityPage?.slide[0]?.vertical
      if(project && verticals.length){
          for(let i=0; i<verticals.length; i++){
            const customersInVertical = verticals[i].highlightedCustomers;
            for(let j=0; j < customersInVertical.length; j++){
              if(project === customersInVertical[j].customerName){
                if(customersInVertical[j].highlightedProjects[0].slide_number_highlightedProjects){
                  window.fullpage_api.moveTo(Number(customersInVertical[j].highlightedProjects[0].slide_number_highlightedProjects))
                }
                break;
              }
            }
          }
      }
    }
  }, [sanityPage])

  return (
    <div>
      <Layout classNameProp="success-stories-page" location={location}>
        {/* Success Stories */}
        {successStories
            .map((data, index) => (
        <div className="section success-story-section success-story-section-0">
          <FullscreenVideo
            videoUrl={data?.videoUrl}
            className={`video_success_stories`}
            idList={[
              `video_popup_${index}`,
              `co_create_video_${index}`,
              `fade_${index}`,
            ]}
          ></FullscreenVideo>
          <article className="success-story">
            <h2 className="success-story__title">{data?.headerTitle}</h2>
            <p className="success-story__content">
              {data?.content}
            </p>
            <button
              className="button-cl success-story__cta"
              onClick={onContactUsBtnClick}
            >
              {data?.cta[0]?.cta_name}
            </button>
            <div className="success-story__video">
              <div
                className="success-story__thumbnail-wrap"
                onClick={() => openVideoPopupWithIndex(index)}
              >
                <img className="success-story__thumbnail" src={data?.thumbnailImage?.asset?.url}></img>
                <img className="play-icon" src={playIcon}></img>
              </div>
              <div className="success-story__client-name">{data?.videoHeader}</div>
            </div>
          </article>
        </div>
         ))}
        {/* <div className="section success-story-section success-story-section-0">
          <FullscreenVideo
            videoUrl="https://www.youtube.com/embed/3OHOhutk3lA"
            className={`video_success_stories`}
            idList={[`video_popup_1`, `co_create_video_1`, `fade_1`]}
          ></FullscreenVideo>
          <article className="success-story">
            <h2 className="success-story__title">Water is life</h2>
            <p className="success-story__content">
              Transforming how this little island in Africa is making the
              limited water supply available equally for all across the nation.
              We are ensuring that people get quality water when & where they
              need it, by deploying our agnostic AIoT on cloud solution, to make
              their aging water network cost effective. Watch the video to see
              how.
            </p>
            <button
              className="button-cl success-story__cta"
              onClick={onContactUsBtnClick}
            >
              Let's get solving
            </button>
            <div className="success-story__video">
              <div
                className="success-story__thumbnail-wrap"
                onClick={() => openVideoPopupWithIndex(1)}
              >
                <img className="success-story__thumbnail" src={cwaThmb}></img>
                <img className="play-icon" src={playIcon}></img>
              </div>
              <div className="success-story__client-name">CWA</div>
            </div>
          </article>
        </div>
        <div className="section success-story-section success-story-section-0">
          <FullscreenVideo
            videoUrl="https://www.youtube.com/embed/k_3rXTROj5c"
            idList={[`video_popup_2`, `co_create_video_2`, `fade_2`]}
            className={`video_success_stories`}
          ></FullscreenVideo>
          <article className="success-story">
            <h2 className="success-story__title">Saving lives</h2>
            <p className="success-story__content">
              At the peak of the Covid pandemic in New York, the worst hit city
              in the world, we helped the Brooklyn Hospital stand up a
              telemedicine solution within days. By the power of AI based
              patient prioritization, we helped save more lives in the ICU while
              reducing stress for overworked medical staff. Watch the video to
              learn more.
            </p>
            <button
              className="button-cl success-story__cta"
              onClick={onContactUsBtnClick}
            >
              Let's get solving
            </button>
            <div className="success-story__video">
              <div
                className="success-story__thumbnail-wrap"
                onClick={() => openVideoPopupWithIndex(2)}
              >
                <img
                  className="success-story__thumbnail"
                  src={brooklynThmb}
                ></img>
                <img className="play-icon" src={playIcon}></img>
              </div>
              <div className="success-story__client-name">
                Brooklyn Hospital
              </div>
            </div>
          </article>
        </div>
        <div className="section success-story-section success-story-section-0">
          <FullscreenVideo
            videoUrl="https://www.youtube.com/embed/ZlU7crd868g"
            className={`video_success_stories`}
            idList={[`video_popup_3`, `co_create_video_3`, `fade_3`]}
          ></FullscreenVideo>
          <article className="success-story">
            <h2 className="success-story__title">Cleaner Air</h2>
            <p className="success-story__content">
              Good health starts with clean air. 91% of the worlds population
              breathes polluted air every day. The New York City Department of
              Health trusted us to help them deliver clean air to its residents
              at a lower cost. We developed a command center solution that
              optimizes the monitoring of air quality across the city by the
              power of Cloud, Edge IoT and AI. Watch the video to learn more.
            </p>
            <button
              className="button-cl success-story__cta"
              onClick={onContactUsBtnClick}
            >
              Let's get solving
            </button>
            <div className="success-story__video">
              <div
                className="success-story__thumbnail-wrap"
                onClick={() => openVideoPopupWithIndex(3)}
              >
                <img className="success-story__thumbnail" src={nycThmb}></img>
                <img className="play-icon" src={playIcon}></img>
              </div>
              <div className="success-story__client-name">New York</div>
            </div>
          </article>
        </div>
        <div className="section success-story-section success-story-section-0">
          <FullscreenVideo
            videoUrl="https://www.youtube.com/embed/pM48FzQPCUQ"
            className={`video_success_stories`}
            idList={[`video_popup_4`, `co_create_video_4`, `fade_4`]}
          ></FullscreenVideo>
          <article className="success-story">
            <h2 className="success-story__title">Reimagine Healthcare</h2>
            <p className="success-story__content">
              We had the privilege of helping the Republic of Indonesia imagine
              a new solution to deliver better healthcare to its citizens. We
              are connecting the dots in the healthcare supply chain so the
              attention & investments of authorities are proactively focused
              when & where needed. The goal is to build a healthier future for
              Indonesia, by the power of innovative technologies such as Cloud &
              AI. Watch the video to learn more.
            </p>
            <button
              className="button-cl success-story__cta"
              onClick={onContactUsBtnClick}
            >
              Let's get solving
            </button>
            <div className="success-story__video">
              <div
                className="success-story__thumbnail-wrap"
                onClick={() => openVideoPopupWithIndex(4)}
              >
                <img
                  className="success-story__thumbnail"
                  src={mediverseThmb}
                ></img>
                <img className="play-icon" src={playIcon}></img>
              </div>
              <div className="success-story__client-name">Mediverse</div>
            </div>
          </article>
        </div> */}
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Our Customers" />

export default OurCustomers
