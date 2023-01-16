export default {
    name: "video",
    title: "Video",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "imageUrl",
        title: "Image Url",
        type: "image",
        options: {
          hotspot: true,
        }
      },
      {
        name: "video",
        title: "Video",
        type: "file",
        options: {
          accept: "video/mp4",
        },
      },
    ]
  }

