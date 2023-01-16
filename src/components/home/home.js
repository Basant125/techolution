import * as React from "react"
import Seo from "../seo"
import * as styles from "./index.module.css"
import { useHomePageSanityData } from "../../graphql/queries/home-page-queries"

const Home = () => {
  const { allSanityPage } = useHomePageSanityData()

  return (
    <>
      <Seo title="Home" />
      <div className={(styles.textCenter, styles.wrapperHome)}>
        <img
          style={{ zIndex: "99" }}
          className="main_home_page_logo"
          src={allSanityPage?.nodes[0]?.Logo?.asset?.url}
          alt="techolution-logo"
        />
      </div>
    </>
  )
}

export default Home
