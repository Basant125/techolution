import * as React from "react"
import ContentPage from "../components/content-page/content-page"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useOurPurposeSanityData } from "../graphql/queries/our-purpose-queries"
import "../styles/our-purpose.css"

const Ourpurpose = ({ location }) => {
  const { allSanityPage } = useOurPurposeSanityData()

  return (
    <Layout
      classNameProp="ourPurposePage"
      bracketIdsProp={["co-create-bracket-image", "bracket-image"]}
      location={location}
    >
      {allSanityPage?.nodes[0]?.slide?.map((pagesValue, index) => (
        <div key={index} className={`section section-ourpurpose-${index}`}>
          <ContentPage
            pagesValue={pagesValue}
            isContactUsBtn={pagesValue?.cta[0]?.cta_name === "CONTACT US"}
          />

        </div>
      ))}
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Our Purpose"
    description="Helping enterprises innovate in the present,
while building a better world for the future"
  />
)

export default Ourpurpose
