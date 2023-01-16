export default {
    name: "menuMain",
    title: "Menu Main",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
          },

        {
        name: "menuBody",
        title: "Menu Body",
        type: "array",
        of: [
            {
              type: "reference",
              to: [{ type: "menuBody" }],
            },
          ],
        },
        {
            name: "socialMeadiaicons",
            title: "Social Media Icons",
            type: "array",
            of: [
                {
                  type: "reference",
                  to: [{ type: "socialMeadiaIcons" }],
                },
              ],
        },
        {
            name: "email",
            title: "email",
            type: "string"
        }
    ]
}