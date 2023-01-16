import React, { useEffect, useRef } from "react"
import "./mobile-footer.css"
import { useIsInViewport } from "../../hooks/useIsInViewport"
import { useFooterSanityData } from "../../graphql/queries/footer-query"
import { useMenuSanityData } from "../../graphql/queries/menu-query"

import downarrow from "../../images/black-nav-down -arrow.svg"

const MobileFooter = () => {
  const mobileFooterRef = useRef(null)
  const isFooterInViewport = useIsInViewport(mobileFooterRef)

  const { allSanityFooter } = useFooterSanityData()
  const footerContent = allSanityFooter?.nodes[0]?.footer_list
  const techolutionTextLogo =
    allSanityFooter?.nodes[0]?.footer_techo_logo.asset.url;
  const { allSanityMenuMain } = useMenuSanityData()

  useEffect(() => {
    const headerWrapper = document.querySelector(".header-wrapper")
    if (isFooterInViewport && headerWrapper && window.location.pathname !== "/privacy-policy") {
      headerWrapper.style.visibility = "hidden"
    } else if (headerWrapper) {
      headerWrapper.style.visibility = "visible"
    }
  }, [isFooterInViewport])
  
  const onContactUsBtnClick = () => {
    document.getElementById("heartElement")?.click()
  }
  return (
    <div>
      <div className="container">
        <div className="arrow-container">
          <div
            role="button"
            className="arrow-btn"
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
        <div ref={mobileFooterRef}></div>
        {footerContent &&
          footerContent.map((content, index) => (
            <div key={index}>
              <div className="title">{content.footer_header}</div>
              {index === 1 || index === 2
                ? content.footer_item.map((item, index) => (
                    <a href={item.footer_item === "Contact Us" ? "#" : item.footer_item_link} className="item" key={index} 
                     onClick={
                      item.footer_item === "Contact Us"
                        ? onContactUsBtnClick
                        : () => {}
                    }>
                      {item.footer_item}
                    </a>
                  ))
                : content.footer_item.map((item, index) => (
                    <div className="item" key={index}>
                      {
                        item.footer_item_link === "email" ?
                        <a href={`mailTo:${item.footer_item}`}>{item.footer_item}</a>
                        :
                        item.footer_item
                      }
                    </div>
                  ))}
              {/* {content.items.map((item, index) => (
            <div className="item" key={index}>
              {item.title}
            </div>
          ))} */}
            </div>
          ))}
        <div className="bottom-footer">
          <div className="socialMediaContainer">
              <a className="linkedIN"
                href={allSanityMenuMain?.nodes[0]?.socialMeadiaicons[0].linkedin}
                target="_blank"
              ></a>
              <a className="youtube"
                href={allSanityMenuMain?.nodes[0]?.socialMeadiaicons[0].youtube}
                target="_blank"
              ></a>
              <a className="twitter"
                href={allSanityMenuMain?.nodes[0]?.socialMeadiaicons[0].twitter}
                target="_blank"
              ></a>
              <a className="instagram"
                href={allSanityMenuMain?.nodes[0]?.socialMeadiaicons[0].instagram}
                target="_blank"
              ></a>
          </div>
          <div className="idk">2022 Techolution</div>
          <div className="idk" ><a href={"/privacy-policy"}>Privacy Policy</a></div>
          <div className="imageContainer">
            <img src={techolutionTextLogo} alt="techolution-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileFooter
