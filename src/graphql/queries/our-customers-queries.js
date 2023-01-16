import { useStaticQuery, graphql } from "gatsby"
export const useOurCustomersSanityData = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityPage(title: {eq: "Our Customers"}) {
        slide {
          ... on SanityCustomersSlide {
            id
            vertical {
              title
              highlightedCustomers {
                customerName
                customerLogo {
                  asset {
                    url
                    width
                    height
                  }
                }
                highlightedProjects {
                  slide_number_highlightedProjects
                  projectHighlightImage {
                    asset {
                      url
                      width
                      height
                    }
                  }
                  projectName
                  projectTitle
                  projectDescription
                }
              }
            }
          }
        }
      }
      allSanityPage(filter: {title: {eq: "Our Customers"}}) {
        nodes {
          title
          slide {
            ... on SanitySlide {
              content
              slide_name
              cta {
                ... on SanityCta {
                  cta_style
                  cta_name
                  cta_link
                }
              }
            }
          }
        }
      }
    }    
  `)
  return data
}
