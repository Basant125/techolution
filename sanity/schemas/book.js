export default {
    name: "book",
    title: "Book",
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
        name: "shortdescription",
        title: "Short Description",
        type: "text",
      },
      {
        name: "longdescription",
        title: "Long Description",
        type: "blockContent",
      }
    ],
  }

