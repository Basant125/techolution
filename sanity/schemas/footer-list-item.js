export default {
  name: "footer_list_item",
  title: "Footer List Item",
  type: "document",
  fields: [
    {
      name: "footer_header",
      title: "Footer Header",
      type: "string",
    },
    {
      name: "footer_item",
      title: "Footer Item",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "footer_items" },
        },
      ],
    },
  ],
}
