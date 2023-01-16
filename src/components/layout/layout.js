/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"
import Header from "../header/header"
import "./layout.css"
import "../../styles/breadCrumbs.css"
import backgroundWhiteBracket from "../../images/WhiteBrackets.svg"
import backgroundWhiteBracketMobile from "../../images/Brackets-mobile.svg"
import backgroundBracketCocreate from "../../images/Co-CreateBrackets.svg"
import backgroundBracketOurPurpose from "../../images/our-purpose-brackets.svg"
import backgroundBracketOurPurposeMob from "../../images/our-purpose-mobile-brackets.svg"
import backgroundgreyBracketMobile from "../../images/Co-Create Bracket.svg"
import backgroundblueBracketMobile from "../../images/Scroll Bracket.svg"
import backgroundBracketOurExpertise from "../../images/Brackets-our-purpose.svg"
import backgroundBracketOurExpertise2 from "../../images/Pralax Brackets-our-expertise.svg"
import backgroundBracketOurExpertise1Mobile from "../../images/Fixed-Bracket-our-expertise.svg"
import backgroundBracketOurExpertise2Mobile from "../../images/Parallax-Bracket-our-expertise-mobile2.svg"
import backgroundBracketPageNotFound from "../../images/GreenBracketsforErrorPage.svg"
import backgroundBracketPageNotFoundMob from "../../images/Mobile-ErrorPageBracet.png"
import backgroundBracketOurTeam from "../../images/BracketsOurTeamcolor.svg"
import googleBrackets from "../../images/GoogleBrackets.svg"
import googleBracketsMob from "../../images/googleBracketsMobile.png"
import { ArrowDirection } from "../../constants/constants.const"
import Arrow from "../arrow/arrow"
import BreadCrumb from "../breadCrumb/breadCrumb"
import { navigate } from "gatsby"
import gsap from "gsap"
import MobileFooter from "../mobile-footer/mobile-footer"
import Footer from "../footer/footer"
import downarrow from "../../images/black-nav-down -arrow.svg"
import backgroundorangeBracketMobile from "../../images/Bracket-Success Stories.svg"
import { slidePositions } from "../../constants/constants.const"

const Layout = ({ children, classNameProp, location, bracketIdsProp = [] }) => {
  const [isMobile, setIsMobile] = React.useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /**
   * Callback on full pagejs page changes
   * Used to show popup in our team page upon page change.
   * @param {*} section
   * @param {*} origin
   * @param {*} destination
   * @param {*} direction
   * @param {*} trigger
   */
  const callback = (section, origin, destination, direction, trigger) => {
    // console.log('destination', origin, origin.item.classList.contains('section-dynamicTemplate-3'));
    if (origin.item.classList.contains("section-dynamicTemplate-3")) {
      document
        .querySelectorAll(".testimonials-amazing-team")
        .forEach(element => {
          // console.log(element);
          // element.classList.remove('team-user-faded');
        })
      // gsap.from('.our-amazing-team-dialog-container-mobile', {
      //   autoAlpha: 0,
      //   duration: 1,
      //   delay: 4
      // });
    }
  }

  React.useEffect(() => {
    const previousPath = getPreviousPath()
    if (previousPath !== location.pathname) {
      localStorage.setItem("previousPath", location.pathname)
    }
  })

  const getPreviousPath = () => {
    return localStorage.getItem("previousPath")
  }

  const getSlidePosition = () => {
    if (location?.state?.forceInitailHomePage) {
      return 1
    }
    const previousPath = getPreviousPath()
    const pageLevel =
      location.pathname === "/" ? 1 : location.pathname.split("/").length
    const previousPaths = previousPath?.split("/")
    if (previousPaths) {
      if (location.pathname.includes("google-cloud")) {
        return slidePositions[`google-cloud-${previousPaths[pageLevel]}`] || 1
      }
      return slidePositions[previousPaths[pageLevel]] || 1
    }
    return 1
  }

  React.useEffect(() => {
    const doc = document.documentElement
    doc.style.setProperty(`—-app-height`, `${window.innerHeight}px`)
    resizeCallback()
    function resizeCallback() {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      if (width < 550) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener("resize", resizeCallback)
    return () => window.removeEventListener("resize", resizeCallback)
  }, [])

  React.useEffect(() => {
    var childNodes = document.getElementById("fp-nav").childNodes
    childNodes[0].className = classNameProp
    document.getElementById("fp-nav").className = `fp-right-${classNameProp}`

    const navFp = document.getElementById("fp-nav").childNodes[0]
    navFp?.childNodes.forEach((liNav, index1) => {
      liNav.addEventListener("touchstart", e => {
        let flag = true
        navFp?.childNodes.forEach((element, index2) => {
          if (element?.childNodes[0]?.classList?.contains("active")) {
            if (index1 > index2 && flag) {
              flag = false
              window.fullpage_api.moveSectionDown()
            } else if (index1 < index2) {
              window.fullpage_api.moveSectionUp()
            }

            e.preventDefault()
            e.stopPropagation()
          }
        })
      })
      liNav.addEventListener("click", e => {
        let flag = true
        navFp?.childNodes.forEach((element, index2) => {
          if (element?.childNodes[0]?.classList?.contains("active")) {
            if (index1 > index2 && flag) {
              flag = false
              window.fullpage_api.moveSectionDown()
            } else if (index1 < index2) {
              window.fullpage_api.moveSectionUp()
            }

            e.preventDefault()
            e.stopPropagation()
          }
        })
      })
    })
  }, [])

  const backButtonClick = () => {
    // const param = window.location.search
    /**
     * checking projectList for our customer slides
     */
    // if (param.includes("projectList")) {
    //   if (param.slice(-1) === "0") {
    //     window.fullpage_api.moveTo(1)
    //   }
    //   if (param.slice(-1) === "1") {
    //     window.fullpage_api.moveTo(2)
    //   }
    //   let params = new URLSearchParams(location.search)
    //   params.delete("projectList")
    //   window.history.replaceState(null, null, window.location.pathname)
    // } else {
    navigate(-1)
    // }
  }

  return (
    <div className={classNameProp}>
      <Header
        location={location}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div
        style={{
          margin: `0 auto`,
          height: "100vh",
        }}
      >
        <main>
          <img
            id="bracket-image"
            className="bracket-image bracket-image-index"
            alt="bracket-img"
            src={backgroundWhiteBracket}
          />
          <img
            id="bracket-image"
            className="bracket-image bracket-image-index-mobile"
            alt="bracket-img"
            src={backgroundWhiteBracketMobile}
          />
          <img
            id="bracket-image"
            className="bracket-image bracket-image-co-create-mobile2"
            alt="bracket-img"
            src={backgroundblueBracketMobile}
          />
          <img
            id="bracket-image"
            className="bracket-image bracket-image-co-create-mobile"
            alt="bracket-img"
            src={backgroundgreyBracketMobile}
          />
          <img
            id="co-create-bracket-image"
            className="bracket-image bracket-image-co-create"
            alt="bracket-img"
            src={backgroundBracketCocreate}
          />
          <img
            id="our-purpose-bracket-image"
            className="bracket-image bracket-image-our-purpose"
            alt="bracket-img"
            src={backgroundBracketOurPurpose}
          />
          <img
            id="our-purpose-bracket-mobile-image"
            className="bracket-image bracket-image-our-purpose-mobile"
            alt="bracket-img"
            src={backgroundBracketOurPurposeMob}
          />
          <img
            id="our-expertise-bracket-image"
            className="bracket-image bracket-image-our-expertise"
            alt="bracket-img"
            src={backgroundBracketOurExpertise}
          />
          <img
            id="our-expertise-bracket-image2"
            className="bracket-image bracket-image-our-expertise2"
            alt="bracket-img"
            src={backgroundBracketOurExpertise2}
          />
          <img
            id="our-expertise-bracket-image1-mobile"
            className="bracket-image bracket-image-our-expertise1-mobile"
            alt="bracket-img"
            src={backgroundBracketOurExpertise1Mobile}
          />
          <img
            id="our-expertise-bracket-image1-mobile"
            className="bracket-image bracket-image-our-expertise2-mobile"
            alt="bracket-img"
            src={backgroundBracketOurExpertise2Mobile}
          />
          <img
            src={googleBrackets}
            id="bracket-image"
            className="bracket-image bracket-image-google-bracket"
            alt="google brackets"
          />
          <img
            src={googleBracketsMob}
            id="bracket-image"
            className="bracket-image bracket-image-google-bracket-mob"
            alt="google brackets mob"
          />
          <img
            src={backgroundorangeBracketMobile}
            id="bracket-image"
            className="bracket-image bracket-image-our-customers-mobile"
            alt="Our customers bracket image"
          />
          <img
            src={backgroundBracketPageNotFound}
            id="bracket-image"
            className="bracket-image bracket-image-page-not-found"
            alt="Page not found bracket image"
          />
          <img
            src={backgroundBracketPageNotFoundMob}
            id="bracket-image"
            className="bracket-image bracket-image-page-not-found-mob"
            alt="Page not found bracket image"
          />
          {/* <img
            src={backgroundBracketOurTeam}
            id="bracket-image"
            className="bracket-image bracket-image-our-team"
            alt="Page not found bracket image"
          /> */}

          <ReactFullpage
            licenseKey={process.env.FULL_PAGE_LICENSE_KEY}
            scrollingSpeed={1000}
            scrollOverflow={true}
            css3={true}
            onLeave={callback}
            easingcss3="ease-out"
            navigation={true}
            normalScrollElements=".scrollable-content"
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  {children}
                  {classNameProp !== "pageNotFound" && (
                    <div className="section section-footer">
                      {isMobile ? (
                        <div>
                          <MobileFooter />
                        </div>
                      ) : (
                        <div className="section-footer-container">
                          <div
                            className={
                              classNameProp === "indexPage"
                                ? "section-footer-gradient footer-top-section"
                                : "footer-top-section"
                            }
                          >
                            {classNameProp === "indexPage" ? (
                              <Arrow direction={ArrowDirection.UP} />
                            ) : (
                              <div className="black-up-arrow-container">
                                <div
                                  role="button"
                                  className="black-up-arrow"
                                  tabIndex={0}
                                  onClick={() => {
                                    window.fullpage_api.moveTo(1)
                                  }}
                                  onKeyUp={() => {
                                    window.fullpage_api.moveTo(1)
                                  }}
                                >
                                  <img src={downarrow} alt="up-arrow" />
                                </div>
                              </div>
                            )}
                          </div>
                          <Footer bracketIds={bracketIdsProp} />
                        </div>
                      )}
                    </div>
                  )}
                </ReactFullpage.Wrapper>
              )
            }}
            afterRender={() => {
              window.fullpage_api.silentMoveTo(getSlidePosition())
              const doc = document.documentElement
              doc.style.setProperty(`—-app-height`, `${window.innerHeight}px`)
            }}
          />
        </main>
      </div>
      <Arrow direction={ArrowDirection.DOWN} />
      <BreadCrumb location={location} />
      <button onClick={() => backButtonClick()} className="backButonBreadCrumb">
        <div className="arrowInverted"></div>Back
      </button>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
