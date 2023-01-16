import { useStaticQuery, graphql } from "gatsby"
export const useSuccessStoriesSanityData = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage(filter: { title: { eq: "Success Stories" } }) {
        nodes {
          title
          slide {
            ... on SanitySuccessStories {
              content
              cta {
                ... on SanityCta {
                    cta_link
                    cta_name
                    cta_style
                }
              }
              title
              videoHeader
              videoUrl
              headerTitle
              thumbnailImage {
                asset {
                  url
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
