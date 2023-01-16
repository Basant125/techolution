export default {
  name: "customers-slide",
  title: "Customers Slide",
  type: "document",
  fields: [
    {
      name: "slide_name",
      title: "Slide Name (Internal)",
      type: "string",
    },
    {
      name: "vertical",
      title: "Vertical",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sector" }],
        }
      ]
    }
  ],
}
