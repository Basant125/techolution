export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Header slide logo",
      name: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "video_url",
      title: "Video Url",
      type: "url",
      validation: Rule =>
        Rule.uri({
          scheme: ["https"],
        }),
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
      name: "pageName",
      title: "Page Name",
      type: "string",
    },
    {
      name: "slide",
      title: "Slide",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "slide" }, { type: "customers-slide" },{ type: "successStories" }],
        },
      ],
      validation: Rule => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
  ],
}
