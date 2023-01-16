import { useStaticQuery, graphql } from "gatsby"
export const  useMenuSanityData  = () => { 
const data = useStaticQuery(graphql`
query  {
  allSanityMenuMain {
    nodes {
      email
      menuBody {
        menu_link
        menu_name
      }
      socialMeadiaicons {
        instagram
        linkedin
        twitter
        youtube
      }
    }
  }
}
`
)
return data
}

