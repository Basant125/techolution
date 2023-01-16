import * as React from "react"
import ContentPage from "../../components/content-page/content-page"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { useOurExpertiseSanityData } from "../../graphql/queries/our-expertise-queries"
import "../../styles/our-expertise.css"
import "../../styles/styles.css"

const OurExpertise = ({ location }) => {
  const [isMobile] = React.useState(false)
  const { allSanityPage } = useOurExpertiseSanityData()

  return (
    <Layout classNameProp="ourExpertisePage" location={location}>
      {allSanityPage?.nodes[0]?.slide?.map((pagesValue, index) => (
        <div
          key={index}
          className={`section our_expertise_section section-ourexpertise-${index}`}
        >
          <ContentPage
            pagesValue={pagesValue}
            pageTitle={allSanityPage.nodes[0].title}
            isContactUsBtn={pagesValue?.cta[0]?.cta_name === "CONTACT US"}
          />
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Our Expertise" />

export default OurExpertise
