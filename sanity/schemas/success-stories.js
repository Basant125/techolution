export default {
  name: "successStories",
  title: "Success Stories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "headerTitle",
      title: "Header Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "string",
    },
    {
      name: "cta",
      title: "Cta",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cta" }, { type: "dropdown_cta" }],
        },
      ],
      validation: Rule => [Rule.error("Every Item should be unique").unique()],
    },
    {
      name: "videoHeader",
      title: "Video Header",
      type: "string",
    },
    {
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "videoUrl",
      title: "Video Url",
      type: "url",
      validation: Rule =>
        Rule.uri({
          scheme: ["https"],
        }),
    },
  ],
}
  