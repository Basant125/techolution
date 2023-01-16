import { useStaticQuery, graphql } from "gatsby"
export const useOurPurposeSanityData = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage(filter: { title: { eq: "Our Purpose" } }) {
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
            }
          }
        }
      }
    }
  `)
  return data
}
