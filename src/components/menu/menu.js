import { slide as Menu } from "react-burger-menu"
import * as React from "react"
import { menuStyle } from "./menu-styles"
import "../layout/layout.css"
import "./menu-style.css"
import { useMenuSanityData } from "../../graphql/queries/menu-query"
import { useState } from "react"

const socialMedia = function (data) {
  return (
    <div className="menu_footer_socialMediaContainer">
      <a
        className="menu_footer_icon menu_footer_linkedIN"
        href={data[0].linkedin}
        target="_blank"
      ></a>
      <a
        className="menu_footer_icon menu_footer_youtube"
        href={data[0].youtube}
        target="_blank"
      ></a>
      <a
        className="menu_footer_icon menu_footer_twitter"
        href={data[0].twitter}
        target="_blank"
      ></a>
      <a
        className="menu_footer_icon menu_footer_instagram"
        href={data[0].instagram}
        target="_blank"
      ></a>
    </div>
  )
}

const socialMediaContent = props => socialMedia(props)

const SideMenu = () => {
  const { allSanityMenuMain } = useMenuSanityData()

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
    document.getElementById("heartElement")?.click()
  }

  return (
    <>
      <Menu
        className="mobileNav"
        right
        styles={menuStyle}
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <div className="nav_container">
          <div className="nav-sep"></div>
          {/* <form className="nosubmit_form">
          <input
              className="nosubmit_input"
              type="search"
              placeholder="Search"
            />
          </form> */}
        </div>
        {allSanityMenuMain?.nodes[0]?.menuBody?.map((item, index) => (
          <a
            key={index}
            onClick={item.menu_name === "Contact Us" ? closeSideBar : () => {}}
            className={`menu-item ${
              item.menu_name === "Contact Us" ? "item_contact_us" : ""
            }`}
            href={item.menu_name !== "Contact Us" && item.menu_link}
          >
            {item.menu_name}
          </a>
        ))}
        <>
          <div className="menu_footer">
            <div className="menu_footer_mail">
              <a
                className="footer-mmail-menu"
                href={`mailTo:${allSanityMenuMain?.nodes[0]?.email}`}
              >
                {allSanityMenuMain?.nodes[0]?.email}
              </a>
            </div>
            {socialMediaContent(allSanityMenuMain?.nodes[0]?.socialMeadiaicons)}
          </div>
        </>
      </Menu>
    </>
  )
}

export default SideMenu
