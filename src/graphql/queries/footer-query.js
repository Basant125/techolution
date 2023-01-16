import { useStaticQuery, graphql } from "gatsby"

export const  useFooterSanityData  = () => { 
    const data = useStaticQuery(graphql`
    query {
        allSanityFooter {
          nodes {
            id
            footer_list {
              footer_header
              footer_item {
                footer_item
                footer_item_link
              }
            }
            footer_techo_logo {
              asset {
                url
              }
            }
          }
        }
      }
    `
    )
return data
}

