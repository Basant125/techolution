export default {
  name: "slide",
  title: "Slide",
  type: "document",
  fields: [
    {
      name: "slide_name",
      title: "Slide Name (Internal)",
      type: "string",
    },
    {
      name: "slide_title",
      title: "Slide Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "content_image_desktop_view",
      title: "Content Image Desktop View",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content_image_mobile_view",
      title: "Content Image Mobile View",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content_footer",
      title: "Content Footer",
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
      name: "video_url",
      title: "Video Url",
      type: "url",
      validation: Rule =>
        Rule.uri({
          scheme: ["https"],
        }),
    },
    {
      name: "co_create_work",
      title: "Co Create Works",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "co_create_works" }],
        },
      ],
      validation: Rule => [
        Rule.error("Every Item should be unique").unique(),
        // Rule.error("Maximum limit is six").max("6"),
      ],
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "testimonials" }],
        },
      ],
      validation: Rule => [Rule.error("Every Item should be unique").unique()],
    },
    {
      name: "menus",
      title: "Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "slide_menu" }],
        },
      ],
      validation: Rule => [Rule.error("Every Item should be unique").unique()],
    },
    {
      name: "blogs",
      title: "Blogs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog" }],
        },
      ],
      validation: Rule => [Rule.error("Every Item should be unique").unique()],
    },
    {
      name: "books",
      title: "Books",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "book" }],
        },
      ],
      validation: Rule => [Rule.error("Every Item should be unique").unique()],
    },
    {
      name: "videos",
      title: "Video",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "video" }],
        },
      ],
      validation: Rule => [Rule.error("Every Item should be unique").unique()],
    },
  ],
}
