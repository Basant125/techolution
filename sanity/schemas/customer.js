export default {
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "customerLogo",
      title: "Customer Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "industry",
      title: "Industry / Vertical",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sector" }],
        },
      ],
      validation: Rule => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
    {
      name: "highlightedProjects",
      title: "Highlighted Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
      validation: Rule => [
        Rule.error("Every Item should be unique").unique()
      ],
    },

  ],
}
