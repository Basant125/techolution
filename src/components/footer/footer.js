import * as React from "react"
import * as styles from "./footer.module.css"
import { useIsInViewport } from "../../hooks/useIsInViewport"
import { useEffect, useRef } from "react"
import { useFooterSanityData } from "../../graphql/queries/footer-query"
import { useMenuSanityData } from "../../graphql/queries/menu-query"

const Footer = props => {
  const footerRef = useRef(null)
  const isFooterInViewport = useIsInViewport(footerRef)
  const { allSanityFooter } = useFooterSanityData()
  const footerContent = allSanityFooter?.nodes[0]?.footer_list
  const techolutionTextLogo =
    allSanityFooter?.nodes[0]?.footer_techo_logo.asset.url
 const { allSanityMenuMain } = useMenuSanityData()
 const socialMediaContent = socialMedia(allSanityMenuMain?.nodes[0]?.socialMeadiaicons[0])

  const hideBracket = bracketId => {
    const bracketElement = document.getElementById(bracketId)
    if (isFooterInViewport && bracketElement) {
      bracketElement.style.display = "none"
    } else if (bracketElement) {
      bracketElement.style.display = "block"
    }
  }
  useEffect(() => {
    if(props.bracketIds && props.bracketIds.length > 0){
      const brackets = [...props.bracketIds]
      brackets.map(bracket => hideBracket(bracket))
    }
  }, [isFooterInViewport, props.bracketIds])

  const onContactUsBtnClick = () => {
    document.getElementById("heartElement")?.click()
  }

  return (
    <div className={styles.footerComponent}>
      {footerContent && (
        <div ref={footerRef} className={styles.footerContainer}>
          <div className={styles.footerColumns}>
            {[0, 1].map(index => (
              <div className={styles.footerColumn} key={index}>
                <div className={styles.columnTitle}>
                  {footerContent[index].footer_header}
                </div>
                {footerContent[index].footer_item.map((item, innerIndex) => (
                  <a
                    key={index + "" + innerIndex}
                    className={styles.item}
                    href={index === 0 ? "#" : item.footer_item_link}
                    style={{ cursor: index === 0 ? "default" : "" }}
                  >
                    <span className={index === 0 ? styles.disableTransition : "" }>{item.footer_item}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <img src={techolutionTextLogo} alt="techolution-logo" />
          </div>
          <div className={styles.footerColumns}>
            {[2, 3].map(index => (
              <div
                className={`${styles.footerColumn} ${styles.thirdContainer}`}
                key={index}
              >
                <div className={styles.columnTitle}>
                  {footerContent[index].footer_header}
                </div>
                {index === 2 ? (
                  footerContent[index].footer_item.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={item.footer_item === "Contact Us" ? "#" : item.footer_item_link}
                        onClick={
                          item.footer_item === "Contact Us"
                            ? onContactUsBtnClick
                            : () => {}
                        }
                        className={styles.item}
                      >
                        <span>{item.footer_item}</span>
                      </a>
                    )
                  })
                ) : (
                  <>
                    {footerContent[index].footer_item.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={styles.item}
                          style={
                            item.footer_item_link === "email"
                              ? { marginTop: "auto" }
                              : null
                          }
                        >
                          <span
                            style={
                              item.footer_item_link === "email"
                                ? { cursor: "pointer", wordBreak: "break-word" }
                                : null
                            }
                            className={
                              item.footer_item_link === "/location"
                                ? styles.disableTransition
                                : ""
                            }
                          >
                            {item.footer_item_link === "email" ? (
                              <a href={`mailTo:${item.footer_item}`}>
                                {item.footer_item}
                              </a>
                            ) : (
                              item.footer_item
                            )}
                          </span>
                        </div>
                      )
                    })}
                    {socialMediaContent}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer

const socialMedia = function (data) {
  return (
    <div className={styles.socialMediaContainer}>
      <a className={styles.linkedIN}
        href={data?.linkedin}
        target="_blank"
      ></a>
      <a className={styles.youtube}
        href={data?.youtube}
        target="_blank"
      ></a>
      <a className={styles.twitter}
        href={data?.twitter}
        target="_blank"
      ></a>
      <a className={styles.instagram}
        href={data?.instagram}
        target="_blank"
      ></a>
    </div>
  )
}
