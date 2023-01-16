import * as React from "react"
import ContentPage from "../components/content-page/content-page"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useCoCreatePageSanityData } from "../graphql/queries/co-create-queries"
import "../styles/co-create.css"
const Cocreate = ({ location }) => {
  const { allSanityPage } = useCoCreatePageSanityData()

  return (
    <>
      <Layout
        classNameProp="cocreatePage"
        bracketIdsProp={["co-create-bracket-image", "bracket-image"]}
        location={location}
      >
        {allSanityPage?.nodes[0]?.slide?.map((pagesValue, index) => (
          <div
            key={index}
            className={`section co_create_section section-cocreate-${index}`
            // ${index === 4 ? "successStories" : ""
            // } ${index === 5 ? "aboutCocreate" : ""}`
          }
          >
            <ContentPage
              pageTitle={allSanityPage.nodes[0].title}
              pagesValue={pagesValue}
              isContactUsBtn={pagesValue?.cta[0]?.cta_name === "CONTACT US"}
            />
          </div>
        ))}
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Cocreate" />

export default Cocreate
