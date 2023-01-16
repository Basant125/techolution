export default {
  name: "dropdown_cta",
  title: "Dropdown Cta",
  type: "document",
  fields: [
    {
      name: "dropdown_cta_name",
      title: "Dropdown Cta name",
      type: "string",
    },
    {
      name: "cta",
      title: "Cta",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cta" }],
        },
      ],
      validation: Rule => [Rule.error("Every Item should be unique").unique()],
    },
  ],
}
