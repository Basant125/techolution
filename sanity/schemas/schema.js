// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
import slide from "./slide"
import page from "./page"
import cta from "./cta"
import dropdownCta from "./dropdown-cta"
import menuMain from "./menu-main"
import menuBody from "./menu-body"
import socialMeadiaIcons from "./social-meadia-icons"
import footer from "./footer"
import footerListItem from "./footer-list-item"
import footerItems from "./footer-items"
import coCreateWorks from "./co-create-works"
import testimonials from "./testimonials"
import customer from "./customer"
import sector from "./sector"
import customersSlide from "./customers-slide"
import book from "./book"
import blog from "./blog"
import video from "./video"
import aboutCoCreateMenu from "./about-co-create-menu"
import blockContent from "./blockContent"
import project from "./project"
import service from "./service"
import youtube from "./youtube"
import extraImages from "./extraImages"
import successStories from "./success-stories"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    slide,
    customersSlide,
    cta,
    dropdownCta,
    menuMain,
    menuBody,
    socialMeadiaIcons,
    footer,
    footerListItem,
    footerItems,
    coCreateWorks,
    testimonials,
    customer,
    sector,
    book,
    blog,
    video,
    aboutCoCreateMenu,
    blockContent,
    project,
    service,
    youtube,
    extraImages,
    successStories
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
})
