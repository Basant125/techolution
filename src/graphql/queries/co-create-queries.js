import { useStaticQuery, graphql } from "gatsby"
export const useCoCreatePageSanityData = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage(filter: { title: { eq: "Co-create" } }) {
        nodes {
          slide {
            ... on SanitySlide {
              slide_name
              slide_title
              content
              menus {
                label
              }
              videos {
                title
                imageUrl {
                  asset {
                    url
                  }
                }
                video {
                  asset {
                    url
                  }
                }
              }
              blogs {
                title
                imageUrl {
                  asset {
                    url
                  }
                }
                shortdescription
              }
              books {
                title
                imageUrl {
                  asset {
                    url
                  }
                }
                shortdescription
              }
              co_create_work {
                co_create_works_title
                co_create_works_image {
                  asset {
                    url
                  }
                }
              }
              testimonials {
                userName
                profilePicUrl {
                  asset {
                    url
                  }
                }
                jobProfile
                companyName
                testimony
              }
              cta {
                ... on SanityCta {
                  show_icon
                  cta_link
                  cta_name
                  cta_style
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
              video_url
            }
          }
          title
        }
      }
    }
  `)
  return data
}
