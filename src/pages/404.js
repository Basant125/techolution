import * as React from "react"
import Layout from "../components/layout/layout"
import "../styles/page-not-found.css"
import Seo from "../components/seo"
import { navigate } from "gatsby"
const NotFoundPage = ({ location }) => (
  <Layout
    classNameProp="pageNotFound"
    bracketIdsProp={["co-create-bracket-image", "bracket-image"]}
    location={location}
  >
    <div className={`section`}>
      <p className="content-header">404</p>
      <p className="content">
        The page you are looking for is <br /> temporarily unavailable
      </p>
      <div className="buttons button_group">
        <div className="button_container">
          <button className="cloudButton" onClick={() => navigate(-1)}>
            PREVIOUS PAGE
          </button>
        </div>
        <div className="button_container">
          <button className="button-cl" onClick={() => navigate("/")}>
            GO TO HOME PAGE
          </button>
          {/* </Link>  */}
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
