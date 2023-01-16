import * as React from "react"
import * as styles from "./slideTab.module.css"
import { useState, useEffect } from "react"

const SlideTab = props => {
  const [menuChecked, setMenuChecked] = useState(0)

  const radioClicked = index => {
    // setMenuChecked(index)
    scrollCardsToPosition(index)
  }

  useEffect(() => {
    if (props.isBlogContainerInViewport) {
      setMenuChecked(0)
    } else if (props.isVideoContainerInViewport) {
      setMenuChecked(1)
    } else if (props.isBookContainerInViewport) {
      setMenuChecked(2)
    }
  }, [
    props.isBookContainerInViewport,
    props.isBlogContainerInViewport,
    props.isVideoContainerInViewport,
  ])

  const scrollCardsToPosition = slideIndex => {
    const carousel = document.getElementById("carouselContainer")
    const blogContainer = document.getElementById("blogContainer")
    const videoContainer = document.getElementById("videoContainer")

    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    if (slideIndex === 0) {
      carousel.scrollLeft = 0
    } else if (slideIndex === 1) {
      if (width <= 500) {
        carousel.scrollLeft = blogContainer.clientWidth + 20
      } else {
        carousel.scrollLeft = carousel.clientWidth
      }
    } else if (slideIndex === 2) {
      if (width <= 500) {
        carousel.scrollLeft =
          blogContainer.clientWidth + videoContainer.clientWidth + 40
      } else {
        carousel.scrollLeft = carousel.scrollWidth
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {/* 
            VIDEO AND BOOKS ARE REMOVED FOR VERSION 1 OF THE APP.
        */}
        {props.slideMenus &&
          props.slideMenus.map((menu, index) => (
            index === 0 && 
            <div key={index}>
              <input
                onChange={() => radioClicked(index)}
                type="radio"
                id={`radio-${index}`}
                name="tabs"
                checked={menuChecked === index ? true : false}
              />
              <label className={styles.tab} htmlFor={`radio-${index}`}>
                {menu.label}
              </label>
            </div>
          ))}
        <span
          className={styles.glider}
          style={{ transform: `translateX(${menuChecked * 100}%)` }}
        ></span>
      </div>
    </div>
  )
}

export default SlideTab
