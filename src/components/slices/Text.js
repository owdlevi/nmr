/** @jsx jsx */
import { jsx } from "theme-ui"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"
import htmlSerializer from "../../utils/htmlSerializer"

export default ({ slice }) => (
  <div
    sx={{
      py: [4, 5, 6],
      px: [4, 5, 6],
      mx: "auto",
      width: ["100%", "90%", "80%"],
      h2: {
        mt: 0,
        mb: [3, 4],
        fontSize: [4, 5],
        textTransform: "uppercase",
      },
      p: {
        fontFamily: "paragraph",
        fontSize: "24px",
        lineHeight: "40px",
        fontWeight: 200,
      },
    }}
  >
    {RichText.render(slice.primary.text, linkResolver, htmlSerializer)}
  </div>
)
