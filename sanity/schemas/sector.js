export default {
  name: "sector",
  title: "Customer Vertical",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'highlightedCustomers',
      title: 'Highlighted Customers',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{ type: "customer" }],
        }
      ]
    }
  ],
}
