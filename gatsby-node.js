exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const dynamicTemplate = require.resolve("./src/templates/dynamicTemplate.js")
  // const blogTemplate = require.resolve("./src/templates/blogTemplate.js")

  const slugs = await graphql(`
    {
      allSanityPage {
        nodes {
          slug {
            current
          }
          title
        }
      }
    }
  `)

  const blogSlugs = await graphql(`
    {
      allSanityBlog {
        nodes {
          slug {
            current
          }
          title
        }
      }
    }
  `)

  const dynamicPages = slugs.data.allSanityPage.nodes?.filter(
    node => node.slug !== null
  )

  dynamicPages.forEach(dynamicPage => {
    createPage({
      path: dynamicPage.slug.current,
      component: dynamicTemplate,
      context: { pageTitle: dynamicPage.title },
    })
  })

  // const blogPages = blogSlugs.data.allSanityBlog.nodes?.filter(
  //   node => node.slug !== null
  // )

  // blogPages.forEach(blogPage => {
  //   createPage({
  //     path: blogPage.slug.current,
  //     component: blogTemplate,
  //     context: { blogTitle: blogPage.title },
  //   })
  // })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
