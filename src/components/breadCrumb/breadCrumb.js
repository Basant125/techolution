import * as React from "react"
import { Link } from "gatsby"
const BreadCrumb = props => {
  const home = ["/"]
  const path = home.concat(
    props.location.pathname.split("/").filter(name => name !== "")
  )
  console.log(props.location.pathname, "loaction")
  let linkPath = ""
  const Pages = {
    home: "Home",
    "co-create": "Our Unique Value",
    "our-expertise": "Our Expertise",
    "enterprise-cloud": "Enterprise Cloud",
    "our-purpose": "Our Purpose",
    "our-customers": "Our Customers",
    "enterprise-cloud-foundation": "Enterprise Cloud Foundation",
    "cloud-security": "Cloud Security",
    "360-governance": "360° Governance",
    "enterprise-data-management": "Enterprise Data Management",
    "cloud-migration": "Cloud Migration",
    "cloud-automation": "Cloud Automation",
    "managed-services": "Managed Services",
    "application-modernization": "Application Modernization",
    "product-innovation": "Product Innovation",
    "real-world-ai": "Real World AI",
    "real-time-data-streaming": "Real Time Data Streaming",
    "edge-compute-iot": "Edge Compute Iot",
    "hybrid-cloud": "Hybrid Cloud",
    "google-cloud": "Google Cloud",
    "our-team": "Our Team",
    "success-stories": "Success Stories",
    "techolution-awards": "awards"
  }
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {path.map((page, index) => {
        if (page === "/") {
          linkPath += page
          page = "home"
        } else {
          if (index === 1) {
            linkPath += page
          } else {
            linkPath += "/" + page
          }
        }
        return (
          <ol className="breadcrumb__list" key={index}>
            <li className="breadcrumb__item">
              {index !== path.length - 1 ? (
                <>
                  <Link className="breadcrumb__link" to={linkPath}>
                    {Pages[page] || "Page Not Found"}
                  </Link>
                  <span
                    className="breadcrumb__separator"
                    aria-hidden="true"
                  ></span>
                </>
              ) : (
                <span style={{ "fontWeight": "500", cursor: "pointer" }}>
                  {Pages[page] || "Page Not Found"}
                </span>
              )}
            </li>
          </ol>
        )
      })}
    </nav>
  )
}

export default BreadCrumb
