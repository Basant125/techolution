import * as React from "react"
import "./actionCard.css"
// import chatIcon from "../../images/chat-svgrepo-com.svg" commented for future use
import plusIcon from "../../images/plus.svg"
import learnMoreIcon from "../../images/i-Icon.svg"
import { Link } from "gatsby"
import {updateDataOptions} from "../multiselect/multiselect"

const ActionCard = props => {
  const overlayMenuId = `${props.slideTitle
    .replace(/ /g, "")
    .toLowerCase()}OverlayMenu`

  const overlayItemsId = `${props.slideTitle
    .replace(/ /g, "")
    .toLowerCase()}OverlayItems`

  const showOvelayMenu = index => {
    const overlayMenu = document.getElementById(`${overlayMenuId + index}`)
    const overlayItems = document.getElementById(`${overlayItemsId + index}`)
    overlayMenu.style.height = "100%"
    setTimeout(() => {
      overlayMenu.style.width = "100%"
      overlayItems.style.display = "block"
    }, 40)
  }
  const handleIminterested = (value) =>{
    document.getElementById("heartElement").click();
    updateDataOptions(value)
  }

  const hideOvelayMenu = index => {
    const overlayMenu = document.getElementById(`${overlayMenuId + index}`)
    const overlayItems = document.getElementById(`${overlayItemsId + index}`)
    overlayMenu.style.height = "0px"
    setTimeout(() => {
      overlayMenu.style.width = "80%"
      overlayItems.style.display = "none"
    }, 40)
  }

  return (
    <div className="action-card-container">
      {props.data.map((item, index) => (
        <div className={`grid-item grid-item-${index}`}>
          <div className="action-card" key={index}>
            <div className="ham-menu-container">
              <div className="ham-menu" onClick={() => showOvelayMenu(index)}>
                <div className="ham-menu-dash"></div>
                <div className="ham-menu-dash"></div>
                <div className="ham-menu-dash"></div>
              </div>
            </div>
            <Link to={item.content_link}>
              <div
                className="card-content"
              >
                <img
                  className="card-image"
                  src={item.co_create_works_image?.asset?.url}
                  alt="image_cocreate"
                />
                <p className="card-text">{item.co_create_works_title}</p>
              </div>
            </Link>
            {/* ---------- Overlay Menu ---------- */}

            <div id={`${overlayMenuId + index}`} className="overlay-menu">
              <div id={overlayItemsId + index} className="overlay-items">
                <div className="ham-menu" onClick={() => hideOvelayMenu(index)}>
                  <div className="ham-menu-dash"></div>
                  <div className="ham-menu-dash"></div>
                  <div className="ham-menu-dash"></div>
                </div>
                <div className="title">{item.co_create_works_title}</div>
                <div className="options-container">
                  <div className="option" onClick={()=>handleIminterested(item.co_create_works_title)}>
                    <span className="option-logo">
                      <img src={plusIcon} />
                    </span>
                    <span className="option-text">I'M INTERESTED</span>
                  </div>
                  <div className="option">
                    <span className="option-logo">
                      <img src={learnMoreIcon} />
                    </span>
                    <span className="option-text"><Link className="option-text-link" to={item.content_link}>LEARN MORE</Link></span>
                  </div>
                  {/* chat option commented for now */}
                  {/* <div className="option">
                  <span className="option-logo">
                    <img src={chatIcon} />
                  </span>
                  <span className="option-text">CHAT NOW</span>
                </div> */}
                </div>
              </div>
            </div>

            {/* ---------------------------------- */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActionCard
