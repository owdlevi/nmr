/** @jsx jsx */
import { jsx } from "theme-ui"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"
import htmlSerializer from "../../utils/htmlSerializer"

const ClientTestimonial = ({ slice }) => {
  const { testimonial_text, client_name, client_company } = slice.primary
  return (
    <div
      sx={{
        py: [4, 5, 6],
        px: [4, 5, 6],
        mx: "auto",
        width: ["100%", "90%", "80%"],
        display: "flex",
        flexFlow: "column",
        blockquote: {
          mt: 0,
          mb: [4, 5, 6],
          mx: 0,
          fontSize: [4, 5, "40px"],
          fontWeight: 700,
          lineHeight: ["1.4em", "1.4em", "60px"],
          fontFamily: "paragraph",
        },
        p: {
          fontFamily: "paragraph",
          fontSize: "24px",
          lineHeight: "40px",
          fontWeight: 200,
        },
      }}
    >
      <blockquote>
        {testimonial_text.length
          ? RichText.asText(testimonial_text, linkResolver, htmlSerializer)
          : ``}
      </blockquote>
      <span
        sx={{
          color: "primary",
          fontSize: "21px",
          display: "inline-block",
          textTransform: "uppercase",
        }}
      >
        {client_name.length ? RichText.asText(client_name) : ``}
      </span>
      <span
        sx={{
          color: "primary",
          fontSize: "21px",
          display: "inline-block",
          textTransform: "uppercase",
        }}
      >
        {client_company.length ? RichText.asText(client_company) : ``}
      </span>
    </div>
  )
}

export default ClientTestimonial
