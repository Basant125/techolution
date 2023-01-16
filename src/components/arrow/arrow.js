import * as React from "react"
import downarrow from "../../images/Black Nav Arrow.svg"
import downArrowWhite from "../../images/whiteNavArrowFacingDown.svg"
import chatIconDefault from "../../images/ChatIconDEFAULTSTATE.svg"
import chatIconWHite from "../../images/ChatIconWhite.svg"
import chatIconPurple from "../../images/chat-svgrepo-com.svg"
import { ArrowDirection } from "../../constants/constants.const"
import chatIconBlue from "../../images/ChatIcon-Bluecopy.svg"
import { closePopup } from "../full-screen-video/full-screen-video"

const Arrow = props => {
  const arrowClick = () => {
    if (props.direction === ArrowDirection.DOWN) {
      const element = document.getElementById("video_popup")
      const element2 = document.getElementById("video_popup_0")
      if (element?.style.display === "block" || element2?.style.display === "block") {
        closePopup()
      }
      window.fullpage_api.moveSectionDown()
    } else {
      window.fullpage_api.moveTo(1)
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      {/* <img
        src={chatIconDefault}
        className="chat-icon-default chat_icon_grey"
        alt="chat-logo"
      />
      <img src={chatIconBlue} className="chat_icon_blue" alt="chat-logo" />
      <img src={chatIconWHite} className="chat-icon-white" alt="chat-logo" />
      <img src={chatIconPurple} className="chat_icon_purple" alt="chat-logo" /> */}
      <button
        id="downArrowBtn" // this id is referenced in our-customers page
        style={{
          fontSize: "6rem",
          color: "#d3d3d3",
          cursor: "pointer",
          position: "absolute",
          bottom: props.direction === ArrowDirection.DOWN ? "1.5%" : "12%",
          left: "50%",
          transform:
            props.direction === ArrowDirection.DOWN
              ? "translateX(-50%)"
              : "translateX(-50%) rotate(180deg)",
          background: "none",
          border: "none",
        }}
        className={`down_arrow ${
          props.direction === ArrowDirection.UP ? "inverted" : ""
        }`}
        onClick={() => arrowClick()}
        onKeyDown={() => window.fullpage_api.moveSectionDown()}
      >
        <img src={downarrow} className="arrow-black" alt="down-arrow" />
        <img src={downArrowWhite} className="arrow-white" alt="down-arrow" />
      </button>
    </div>
  )
}

export default Arrow
