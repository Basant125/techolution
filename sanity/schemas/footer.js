export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "footer_name",
      title: "Footer name",
      type: "string",
    },
    {
      name: "footer_techo_logo",
      title: "Footer Techo Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "footer_list",
      title: "Footer List",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "footer_list_item" },
        },
      ],
    },
  ],
}
