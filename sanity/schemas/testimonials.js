export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "User name",
      type: "string",
    },
    {
      name: "profilePicUrl",
      title: "Profile pic url",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "jobProfile",
      title: "Job Profile",
      type: "string",
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "testimony",
      title: "Testimony",
      type: "string",
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
  ],
}
