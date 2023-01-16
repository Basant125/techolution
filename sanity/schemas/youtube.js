import React from "react"
import getYouTubeID from "get-youtube-id"

const YoutubePreview = ({ value }) => {
  const id = getYouTubeID(value?.url)
  const url = `https://www.youtube.com/embed/${id}`
  if (!id) {
    return <div>Missing Youtube URL</div>
  }
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube Preview"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  )
}

export default {
  name: "youtube",
  title: "Youtube Embed",
  type: "object",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Youtube URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: YoutubePreview,
  },
}
