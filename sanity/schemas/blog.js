export default {
  name: "blog",
  title: "Blog",
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
      },
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "blogBy",
      title: "Blog By",
      type: "string",
    },
    {
      name: "blogDate",
      title: "Blog Date",
      type: "date",
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
    },
  ],
}
