import { useStaticQuery, graphql } from "gatsby"
export const useEnterpriseCloudSanityData = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage(filter: { title: { eq: "Enterprise Cloud" } }) {
        nodes {
          title
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
              content_image_desktop_view {
                asset {
                  url
                }
              }
              content_image_mobile_view {
                asset {
                  url
                }
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
  `)
  return data
}
