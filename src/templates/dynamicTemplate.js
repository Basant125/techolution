import * as React from "react"
import ContentPage from "../components/content-page/content-page"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import "../styles/dynamicTemplate.css"
import { gsap } from "gsap"

import { graphql } from "gatsby"

export const pageQuery = graphql`
  query ($pageTitle: String) {
    allSanityPage(filter: { title: { eq: $pageTitle } }) {
      nodes {
        title
        pageName
        _id
        slide {
          ... on SanitySlide {
            content
            content_footer
            cta {
              ... on SanityCta {
                id
                cta_name
                cta_link
                cta_style
              }
            }
            slide_name
            slide_title
            testimonials {
              id
              userName
              profilePicUrl {
                asset {
                  url
                }
              }
              jobProfile
              testimony
              video_url
            }
            co_create_work {
              co_create_works_title
              content_link
              co_create_works_image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
const DynamicTemplate = ({ data, location }) => {
  const allSanityPage = data?.allSanityPage
  const pageNameClass = allSanityPage?.nodes[0]?.pageName
  React.useEffect(() => {
    // console.log('pageName', pageNameClass);
    if(pageNameClass === 'ourTeam' && typeof window !== 'undefined') {
      // full pae move to next page
      gsap.to('.section-dynamicTemplate-0', {
        autoAlpha: 0,
        duration: 1.5,
        delay: 3,
        onComplete: () => {
          const isFirstSlide = document.body.classList.contains("fp-viewing-0");
          if(window.location.pathname.includes('our-team') && isFirstSlide){
            window.fullpage_api.silentMoveTo(2);
          }
          gsap.to('.section-dynamicTemplate-0', {autoAlpha: 1});
        }
      });
    }
  }, [])
  return (
    <div className="dynamicTemplate">
      <Layout
        classNameProp={pageNameClass}
        bracketIdsProp={["co-create-bracket-image", "bracket-image"]}
        location={location}
      >
        {allSanityPage?.nodes[0]?.slide?.map((pagesValue, index) => (
          <div
            key={index}
            className={`section section-dynamicTemplate-${index} section-${pageNameClass}-${index}`}
          >
            <ContentPage
              pagesValue={pagesValue}
              pageTitle={allSanityPage.nodes[0].title}
              isContactUsBtn={
                pagesValue?.cta[0]?.cta_name === "CONTACT US" || "LET'S CONNECT"
              }
            />
          </div>
        ))}
      </Layout>
    </div>
  )
}

export const Head = ({ data }) => (
  <Seo title={data?.allSanityPage?.nodes[0]?.title} />
)

export default DynamicTemplate
