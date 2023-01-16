export default {
  name: "extra_Images",
  title: "Extra Items",
  type: "document",
  fields: [
    {
      name: "extra_Images_name",
      title: "Extra image name",
      type: "string",
    },
    {
      name: "extra_Images_Web_Upload",
      title: "Extra Images Web Upload",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
