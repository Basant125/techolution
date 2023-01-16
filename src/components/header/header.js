import * as React from "react"
import PropTypes from "prop-types"
import playIconGrey from "../../images/PlayIconGreyDEFAULT STATE.svg"
import { useState, useEffect } from "react"
import "./header.css"
import MobileNav from "../menu/menu"
import ConnectSideBar from "../connectSideBar/connectSideBar"
import { connectSideBarMaxWidth } from "../../constants/constants.const"
import { navigate } from "gatsby"
import { openVideoPopup } from "../full-screen-video/full-screen-video"

const Header = ({ location }) => {
  const [isConnectSideBarOpen, setIsConnectSideBarOpen] = useState(false)
  const [formFinalPage, setFormFinalPage] = useState(false)
  const [heartPosition, setHeartPosition] = useState(0)
  const [heartTopPosition, setHeartTopPosition] = useState(0)
  const [childPageClassName, setchildPageClassName] = useState("")

  const openSidebar = () => {
    setIsConnectSideBarOpen(true)
    positionHeartElement()
    window.fullpage_api?.setAllowScrolling(false);
  }
  const closeSidebar = () => {
    setIsConnectSideBarOpen(false)
    setHeartPosition(0);
    setHeartTopPosition(0)
    setFormFinalPage(false)
  }

  const setFinalPage = () => {
    setFormFinalPage(true)
  }

  const positionHeartElement = () => {
    const heartElement = document.getElementById("heartElement")
    heartElement.style.top = null
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    const heartPosition =
      (width > connectSideBarMaxWidth ? connectSideBarMaxWidth : width) / 2 -
      heartElement.clientWidth / 2
    const letsConnectTextOffset = 55;
    if (isConnectSideBarOpen && formFinalPage) {
      const finalPageContent = document.getElementById("finalPageContent")
      setHeartTopPosition(finalPageContent?.getBoundingClientRect().top - 70)
      setHeartPosition(heartPosition)
      return
    }
    setHeartPosition(heartPosition + letsConnectTextOffset)
  }
  const chooseClass = (name) => {
    setchildPageClassName(name)
    //childPage_ClassName=name;
  }

  useEffect(() => {
    if (isConnectSideBarOpen && formFinalPage) {
      positionHeartElement()
    }
    function resizeCallback(e) {
      if (isConnectSideBarOpen) {
        positionHeartElement()
      }
    }
    window.addEventListener("resize", resizeCallback)
    return () => window.removeEventListener("resize", resizeCallback)
  }, [isConnectSideBarOpen, formFinalPage])

  const headerLogoClickEvent = () => {
    if (location?.pathname === "/") {
      window.fullpage_api.moveTo(1)
      return
    }
    navigate("/", { state: { forceInitailHomePage: true } })
  }

  return (
    <header className="header-wrapper">
      <div className="header-sub">
        {/* <img
          alt="Techolution logo"
          height={40}
          width="auto"
          style={{ margin: 0 }}
          src={techoLogo}
          className="techo-logo-black"
        /> */}
        <div onClick={headerLogoClickEvent} className="header-logo">
          {/* <img
            alt="Techolution logo"
            height={40}
            width="auto"
            style={{ margin: 0 }}
            src={whiteTechoLogo}
            className="techo-logo-white"
          />
           <img
            alt="Techolution logo"
            height={40}
            width="auto"
            style={{ margin: 0 }}
            src={blackGreenMobileLogo}
            className="techo-only-logo-mobile"
          />
          <img
            alt="Techolution logo"
            width="auto"
            height={45}
            style={{ margin: 0 }}
            src={whiteTechoMobileLogo}
            className="techo-only-logo-white"
          /> */}
          <div className="techo-logo-mobile" />
          <div className="techo-logo" />
        </div>
        <MobileNav></MobileNav>
      </div>
      <div>
        <div onClick={openVideoPopup}>
          <img
            src={playIconGrey}
            width="auto"
            height="auto"
            className="play-icon-btn play_icon_grey"
            alt="play-icon"
          />
          {/* <img
            src={playIconBlue}
            width="auto"
            height="auto"
            className="play_icon_cocreate"
            alt="play-icon"
          />
          <img
            src={playIconPurple}
            width="auto"
            height="auto"
            className="play_icon_purple"
            alt="play-icon"
          /> */}
        </div>
        <div role="article">
          <div
            id="heartElement"
            className={`${childPageClassName} heart-icon-btn heart_element ${isConnectSideBarOpen ? "sideBarOpen" : ""
              }`}
            style={{ right: heartPosition ? `${heartPosition}px` : "", top: heartTopPosition ? `${heartTopPosition}px` : "" }}
            onClick={() => openSidebar()}
            onKeyPress={() => openSidebar()}
            role="presentation"
          ></div>
        </div>
        <ConnectSideBar chooseClass={chooseClass} isOpen={isConnectSideBarOpen} close={closeSidebar} setFinalPage={setFinalPage} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
