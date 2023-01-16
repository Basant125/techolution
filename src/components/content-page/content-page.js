import * as React from "react"
import { useEffect, useRef } from "react"
import Seo from "../seo"
import CloudIcon from "../../images/google-cloud.svg"
import Dropdown from "../dropdown-button/dropdown-button"
import ArrowRight from "../../images/arrow-right.svg"
import AddIcon from "../../images/plus-icon.svg"
import LighteningIcon from "../../images/lightning-icon.svg"
import whiteArrow from "../../images/Icon awesome-play.svg"
import Testimonial from "../testimonial/testimonial"
import SlideTab from "../slideTab/slideTab"
import BookBlogCard from "../bookBlogCard/bookBlogCard"
import VideoCard from "../videoCard/videoCard"
import * as styles from "./content-page.module.css"
import CustomButton from "../buttonWithArrow/buttonWithArrow"
import { useIsInViewport } from "../../hooks/useIsInViewport"
import ImageTextCard from "../image-text-card/image-text-card"
import ActionCard from "../actionCard/actionCard"
import StaticCard from "../staticCard/staticCard"
import {
  FullscreenVideo,
  openVideoPopup,
} from "../full-screen-video/full-screen-video"
import { Link } from "gatsby"
import OurAmazingTeam from "../our-amazing-team/our-amazing-team"
import { navigate } from "gatsby"
import {updateDataOptionsByPage} from "../multiselect/multiselect"

const ContentPage = props => {
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const sliderRef = useRef(null)
  const timerRef = useRef(null)
  const isSuccessStories = props.pagesValue.testimonials?.length > 0
  const learnMoreAboutCoCreate = props.pagesValue.menus?.length > 0
  const slideMenus = props.pagesValue.menus || []
  const blogs = props.pagesValue.blogs
  const books = props.pagesValue.books
  const videos = props.pagesValue.videos
  const bookContainerRef = useRef(null)
  const blogContainerRef = useRef(null)
  const videoContainerRef = useRef(null)
  const isBookContainerInViewport = useIsInViewport(bookContainerRef)
  const isBlogContainerInViewport = useIsInViewport(blogContainerRef)
  const isVideoContainerInViewport = useIsInViewport(videoContainerRef)

  const mousedown = e => {
    isDown.current = true
    sliderRef.current.classList.add("active")
    if (e.type === "mousedown") {
      startX.current = e.pageX - sliderRef.current.offsetLeft
    }
    if (e.type === "touchstart") {
      startX.current = e.changedTouches[0].pageX - sliderRef.current.offsetLeft
    }
    scrollLeft.current = sliderRef.current.scrollLeft
  }

  const removeActive = e => {
    isDown.current = false
    sliderRef.current.classList.remove("active")
  }

  const mousemove = e => {
    if (!isDown.current) return // stop the fn from running
    e.preventDefault()
    let positionx
    if (e.type === "mousemove") {
      positionx = e.pageX - sliderRef.current.offsetLeft
    }
    if (e.type === "touchmove") {
      positionx = e.changedTouches[0].pageX - sliderRef.current.offsetLeft
    }
    const walk = (positionx - startX.current) * 2
    sliderRef.current.scrollLeft = scrollLeft.current - walk
  }

  const scrollHorizontally = e => {
    var isTouchPadEvent = e.wheelDeltaY
      ? e.wheelDeltaY === -3 * e.deltaY
      : e.deltaMode === 0
    if (timerRef.current && isTouchPadEvent) {
      return
    }
    timerRef.current = setTimeout(() => {
      e = window.event || e
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
      const scrollSpeed = 200
      sliderRef.current.scrollLeft -= delta * scrollSpeed
    }, 10)
    e.preventDefault()
  }

  const onContactUsBtnClick = (title) => {
    document.getElementById("heartElement")?.click()
    if((title !== undefined || null) && (props.pageTitle === "Enterprise Cloud"
    || props.pageTitle === "Co-create"
    || props.pageTitle === "Real World AI"
    || props.pageTitle === "Product Innovation")){
      updateDataOptionsByPage(title)
    }
  }

  const handleNavigate = links => {
    navigate(`${links}`)
  }

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.addEventListener("mousewheel", scrollHorizontally)
      sliderRef.current.addEventListener("DOMMouseScroll", scrollHorizontally)

      return () => {
        if (sliderRef && sliderRef.current) {
          sliderRef.current.removeEventListener(
            "mousewheel",
            scrollHorizontally
          )
          sliderRef.current.removeEventListener(
            "DOMMouseScroll",
            scrollHorizontally
          )
        }
      }
    }

    //Quick fix for the our team page issue @sabithpocker
    if(document.querySelector('.indexPage .section-6 .buttons-2')) {
      document.querySelector('.indexPage .section-6 .buttons-2').innerHTML = '<a href="/our-team/"><button class="button-cl false">OUR TEAM</button></a>'
    }
  }, [])

  // useEffect(() => {
  //   if (sliderRef && sliderRef.current) {
  //     sliderRef.current.addEventListener("mousedown", mousedown)
  //     sliderRef.current.addEventListener("mouseleave", removeActive)
  //     sliderRef.current.addEventListener("mouseup", removeActive)
  //     sliderRef.current.addEventListener("mousemove", mousemove)

  //     //touchEvents
  //     sliderRef.current.addEventListener("touchstart", mousedown)
  //     sliderRef.current.addEventListener("touchend", removeActive)
  //     sliderRef.current.addEventListener("touchcancel", removeActive)
  //     sliderRef.current.addEventListener("touchmove", mousemove)

  //     return () => {
  //       if (sliderRef && sliderRef.current) {
  //         sliderRef.current.removeEventListener("mousedown", mousedown)
  //         sliderRef.current.removeEventListener("mouseleave", removeActive)
  //         sliderRef.current.removeEventListener("mouseup", removeActive)
  //         sliderRef.current.removeEventListener("mousemove", mousemove)
  //         sliderRef.current.removeEventListener("touchstart", mousedown)
  //         sliderRef.current.removeEventListener("touchend", removeActive)
  //         sliderRef.current.removeEventListener("touchcancel", removeActive)
  //         sliderRef.current.removeEventListener("touchmove", mousemove)
  //       }
  //     }
  //   }
  // }, [])

  return (
    <div className="fp-overflow">
      {props.pagesValue?.video_url != null && (
        <FullscreenVideo
          videoUrl={props.pagesValue?.video_url}
          idList={["video_popup", "co_create_video", "fade"]}
        ></FullscreenVideo>
      )}
      {props.pagesValue?.slide_title && (
        <p
          className={`section-content section-content-title ${
            isSuccessStories ? "successStories" : ""
          }`}
        >
          {props.pagesValue?.slide_title}
        </p>
      )}

      {!isSuccessStories && !learnMoreAboutCoCreate && (
        <p className="section-content main_section_content">
          {props.pagesValue?.content}
        </p>
      )}

      {props.pagesValue?.content_image_desktop_view && (
        <img
          className={styles.main_section_content_image_desktop}
          src={props.pagesValue?.content_image_desktop_view?.asset?.url}
          alt="main-section-content-image"
        />
      )}

      {props.pagesValue?.content_image_mobile_view && (
        <img
          className={styles.main_section_content_image_mobile}
          src={props.pagesValue?.content_image_mobile_view?.asset?.url}
          alt="main-section-content-image"
        />
      )}

      {props.pagesValue?.content_footer && (
        <p className="section-content-footer">
          {props.pagesValue?.content_footer}
        </p>
      )}

      {isSuccessStories && props.pageTitle === "Co-create" && (
        <div
          ref={sliderRef}
          className="testimonials scrollable-content"
          style={{ display: "flex", gap: "4vw", width: "100vw" }}
        >
          {props.pagesValue.testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      )}
      {props.pageTitle === "Our Team" &&
        props.pagesValue.slide_title === "OUR AMAZING TEAM" && (
          <OurAmazingTeam testimonial={props.pagesValue.testimonials} isAmazingTeamSecondSlide={props.pagesValue.slide_name === "OUR AMAZING TEAM"}/>
        )}
      {learnMoreAboutCoCreate && (
        <div>
          <SlideTab
            slideMenus={slideMenus}
            isBookContainerInViewport={isBookContainerInViewport}
            isBlogContainerInViewport={isBlogContainerInViewport}
            isVideoContainerInViewport={isVideoContainerInViewport}
          />
          <div className={styles.carouselContainer} id="carouselContainer">
            <div
              ref={blogContainerRef}
              id="blogContainer"
              className={`${styles.cardContainer}`}
            >
              {blogs.map((blog, index) => (
                <BookBlogCard key={index} details={blog} />
              ))}
            </div>
            {/* 
                VIDEO AND BOOKS ARE REMOVED FOR VERSION 1 OF THE APP.
            */}
            {/* <div
              ref={videoContainerRef}
              id="videoContainer"
              className={`${styles.cardContainer}`}
            >
              {videos.map((video, index) => (
                <VideoCard key={index} details={video} />
              ))}
            </div>
            <div
              ref={bookContainerRef}
              id="bookContainer"
              className={styles.cardContainer}
            >
              {books.map((book, index) => (
                <BookBlogCard key={index} details={book} />
              ))}
            </div> */}
          </div>
        </div>
      )}

      {/* co create works */}
      <div
        style={{
          display: "flex",
          fontSize: "1vw",
          justifyContent: "center"
        }}
        className="co-create-container"
      >
        {props.pageTitle !== "Our Expertise" &&
          props.pageTitle !== "Enterprise Cloud" &&
          props.pageTitle !== "Enterprise Data  Management" &&
          props.pageTitle !== "GOOGLE CLOUD" &&
          props.pagesValue?.co_create_work?.map((data, index) => (
            <>
              <div
                style={{
                  width: "16%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: "0 20px",
                  alignItems: "center",
                }}
                className={`co-create-icons${index} co-create-icons`}
              >
                <img
                  style={{ width: "35%" }}
                  src={data?.co_create_works_image?.asset?.url}
                  alt="img"
                  id={`co-create-image${index}`}
                  className="co-create-image"
                />
                <p
                  style={{ textAlign: "center", marginTop: "20px" }}
                  className="co-create-text"
                  id="co-create-para"
                >
                  {data?.co_create_works_title}
                </p>
              </div>
              <img
                src={ArrowRight}
                alt="right-arrow"
                id={`rightArrow${index}`}
                className="rightArrow"
              />
              <img
                src={AddIcon}
                alt="plus-icon"
                id={`plusIcon${index}`}
                className="plus-icon"
              />
              <img
                src={LighteningIcon}
                alt="lightening-icon"
                id={`lighteningIcon${index}`}
                className="lightening-icon"
              />
            </>
          ))}
        {props.pageTitle === "Our Expertise" &&
          props.pagesValue?.co_create_work?.length > 0 && (
            <ImageTextCard
              data={props.pagesValue?.co_create_work}
            ></ImageTextCard>
          )}
        {(props.pageTitle === "Enterprise Cloud" ||
          props.pageTitle === "Enterprise Data  Management" || (props.pageTitle === "GOOGLE CLOUD" &&  props.pagesValue?.co_create_work?.length > 0 &&  props.pagesValue?.co_create_work?.[0]?.content_link))
           &&
          props.pagesValue?.co_create_work?.length > 0 && (
            <ActionCard
              data={props.pagesValue?.co_create_work}
              slideTitle={props.pagesValue.slide_title}
            ></ActionCard>
          )}
          {((props.pageTitle === "GOOGLE CLOUD" &&  props.pagesValue?.co_create_work?.length > 0 &&  !props.pagesValue?.co_create_work?.[0]?.content_link))
           &&
          (
            <StaticCard
              data={props.pagesValue?.co_create_work}
            ></StaticCard>
          )
          }
      </div>
      {/* co create works */}
      {props.pagesValue?.cta?.length > 1 ? (
        <div className="buttons button_group">
          { (props.pagesValue?.cta[0]?.cta_style === "cloudButton" || props.pagesValue?.cta[1]?.cta_style === "cloudButton") ?
          <>
            <div className="button_container">
              <button
                className="cloudButton"
                onClick={  
                  props.pagesValue?.cta[1]?.cta_name === "GOOGLE CLOUD" ? () => handleNavigate(props.pagesValue.cta[1].cta_link) :
                  props.pagesValue?.cta[1]?.cta_name === "LET'S CONNECT"
                    ? onContactUsBtnClick
                    : () => {}
                }
              >
                <img src={CloudIcon} alt="cloudIcon" className="cloudIcon" />
                {props.pagesValue?.cta[1]?.cta_name}
              </button>
            </div>
            <div className="button_container">
              {props.pagesValue?.cta && props.pagesValue?.cta[0]?.cta_name && (
                <Link to={props.pagesValue.cta[0].cta_link}>
                  <button
                    className="button-cl"
                    onClick={
                      props.pagesValue?.cta[0]?.cta_name === "ADD FUTURE-PROOFING" || "FUTURE PROOF IT"
                        ? () => window.fullpage_api.moveSectionDown()
                        : props.handleNavigate
                    }
                  >
                    {props.pagesValue?.cta[0]?.cta_name}
                  </button>
                </Link>
              )}
            </div>
          </>
          :
          <>
            <div className="button_container">
              <button
                className="button-cl ourCustomersBtn"
                onClick={() => handleNavigate(props.pagesValue.cta[0].cta_link)}
              >
                {props.pagesValue?.cta[0]?.cta_name}
              </button>
            </div>
            <div className="button_container">
              <button
                  className="button-cl"
                  onClick={props.pagesValue?.cta[1]?.cta_name === "LET'S CONNECT"
                  ? () =>{ onContactUsBtnClick(props.pageTitle)}
                  : () => handleNavigate(props.pagesValue.cta[1].cta_link)}
                >
                {props.pagesValue?.cta[1]?.cta_name}
              </button>
            </div>
          </>
          }
        </div>
      ) : props.pagesValue?.cta[0]?.cta_style === "button2" ? (
        <CustomButton label={"@TECHOVERSITY"} click={() => {}} type="button2" />
      ) : (
        <div className="buttons-2 button_container">
          {props.pagesValue?.cta[0]?.dropdown_cta_name && (
            <Dropdown cta={props.pagesValue?.cta[0]}></Dropdown>
          )}
          {props.pagesValue?.cta[0]?.cta_style === "onhover-icon" ? (
            <div>
              <button
                className="button-cl button_hover_icon"
                onClick={openVideoPopup}
              >
                <span className="hover_button_text">
                  {props.pagesValue?.cta
                    ? props.pagesValue?.cta[0]?.cta_name
                    : ""}
                </span>
                <img className="button_icon" src={whiteArrow} />
              </button>
            </div>
          ) : (
            props.pagesValue?.cta &&
            props.pagesValue?.cta[0]?.cta_name && (
              <Link
                to={
                  props.isContactUsBtn
                    ? onContactUsBtnClick
                    : props.pagesValue.cta[0].cta_link
                }
              >
                {props.pagesValue?.cta[0]?.cta_name === "SUCCESS STORIES" &&
                  props.pagesValue?.slide_name ===
                    "Our Customers - Impressed with" && (
                    <button
                      className={`button-cl`}
                    >
                      {props.pagesValue?.cta[0]?.cta_name}
                    </button>
                  )}

                {props.pagesValue?.slide_name !==
                  "Our Customers - Impressed with" && (
                  <button
                    className={`button-cl ${
                      props.pagesValue?.cta[0]?.cta_style === "cloudButton" &&
                      "customCloudButton"
                    }`}
                    onClick={
                      props.isContactUsBtn ||
                      props.pagesValue?.cta[0]?.cta_name === "LET'S CONNECT"
                        ? () => {onContactUsBtnClick(props.pageTitle)}
                        : props.handleNavigate
                    }
                  >
                    {props.pagesValue?.cta[0]?.cta_style === "cloudButton" && (
                      <img
                        src={CloudIcon}
                        alt="cloudIcon"
                        className="cloudIcon"
                      />
                    )}
                    {props.pagesValue?.cta
                      ? props.pagesValue?.cta[0]?.cta_name
                      : ""}
                  </button>
                )}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  )
}

export const Head = () => <Seo title="Home Page" />

export default ContentPage
