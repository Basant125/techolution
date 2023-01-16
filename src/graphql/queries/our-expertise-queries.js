import { useStaticQuery, graphql } from "gatsby"
export const useOurExpertiseSanityData = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage(filter: { title: { eq: "Our Expertise" } }) {
        nodes {
          slide {
            ... on SanitySlide {
              content
              slide_name
              slide_title
              cta {
                ... on SanityCta {
                  id
                  cta_name
                  cta_style
                  cta_link
                }
                ... on SanityDropdownCta {
                  dropdown_cta_name
                  cta {
                    cta_link
                    cta_name
                    cta_style
                    show_icon
                  }
                }
              }
              co_create_work {
                co_create_works_image {
                  asset {
                    url
                  }
                }
                co_create_works_title
                content_link
              }
            }
          }
          title
        }
      }
    }
  `)
  return data
}
