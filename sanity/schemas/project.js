export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slide_number_highlightedProjects",
      title: "Slide Number Highlighted Project",
      type: "string",
    },
    {
      name: "projectHighlightImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "string",
    },
    {
      name: "customer",
      title: "Customer",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "customer" }],
        },
      ],
    },
    {
      name: "service",
      title: "Product / Service",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
      validation: Rule => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
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
  ],
}
