import React from "react"
import { graphql } from "gatsby"
import YouTube from "react-youtube"
import getYouTubeID from "get-youtube-id"
import { PortableText } from "@portabletext/react"
import "../styles/blog-template.css"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
export const pageQuery = graphql`
  query ($blogTitle: String) {
    allSanityBlog(filter: { title: { eq: $blogTitle } }) {
      nodes {
        title
        slug {
          current
        }
        _rawLongdescription
        shortdescription
        blogBy
        blogDate
      }
    }
  }
`
const srelizerComponent = {
  marks: {
    link: ({ children, value }) => {
      const { blank, href } = value
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
  types: {
    youtube: ({ value }) => {
      const { url } = value
      const id = getYouTubeID(url)
      return <YouTube videoId={id} />
    },
  },
}

export default function BlogTemplate({ data }) {
  const allSanityBlog = data?.allSanityBlog
  return (
    <div className="blogTemplate">
      <div className="blogTemplateHeader">
        <Header></Header>
        <h1
          style={{
            fontSize: "28px",
            textAlign: "center",
            paddingTop: "18rem",
            color: "white",
          }}
        >
          {allSanityBlog?.nodes[0]?.title}
        </h1>
        <p className="bogBy-date">
          By: {allSanityBlog?.nodes[0]?.blogBy} .{" "}
          {allSanityBlog?.nodes[0]?.blogDate}
        </p>
      </div>
      <div
        className="portable-content"
        style={{
          width: "80%",
          margin: "auto",
          paddingTop: "5rem",
          paddingBottom: "15rem",
        }}
      >
        <PortableText
          value={allSanityBlog?.nodes[0]?._rawLongdescription}
          components={srelizerComponent}
        />
      </div>
      <Footer bracketIds={[]} />
    </div>
  )
}
