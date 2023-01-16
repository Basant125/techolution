import { useStaticQuery, graphql } from "gatsby"
export const useHomePageSanityData = () => {
  const data = useStaticQuery(graphql`
    query allpage {
      allSanityPage(filter: { title: { eq: "Home" } }) {
        nodes {
          title
          Logo {
            asset {
              url
            }
          }
          video_url
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
