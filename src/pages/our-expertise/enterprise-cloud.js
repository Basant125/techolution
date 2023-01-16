import * as React from "react"
import ContentPage from "../../components/content-page/content-page"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { useEnterpriseCloudSanityData } from "../../graphql/queries/enterprise-cloud-quries"
import "../../styles/enterprise-cloud.css"

const Enterprisecloud = ({ location }) => {
  const { allSanityPage } = useEnterpriseCloudSanityData()

  return (
    <Layout
      classNameProp="enterpriseCloudPage"
      bracketIdsProp={[
        "our-expertise-bracket-image",
        "bracket-image",
        "co-create-bracket-image",
      ]}
      location={location}
    >
      {allSanityPage?.nodes[0]?.slide?.map((pagesValue, index) => (
        <div key={index} className={`section section-enterprisecloud-${index}`}>
          <ContentPage
            pageTitle={allSanityPage.nodes[0].title}
            pagesValue={pagesValue}
            isContactUsBtn={pagesValue?.cta[0]?.cta_name === "CONTACT US"}
          />
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Enterprise Cloud" />

export default Enterprisecloud
