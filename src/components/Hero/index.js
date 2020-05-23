/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"

// Using the queried Blog Home document data, we render the top section
const Hero = ({ home }) => {
  return (
    <Container
      data-wio-id={home._meta.id}
      sx={{
        variant: "styles.container",
        maxWidth: "1130px",
        minHeight: "300px",
        height: "calc(90vh - 500px)",
        px: 4,
      }}
    >
      <h2
        sx={{
          variant: "styles.subtitleh2",
        }}
      >
        Digital, Web & Print Design Agency
      </h2>
      <h1
        sx={{
          variant: "styles.h1",
        }}
      >
        {RichText.asText(home.hero_title)}
      </h1>
      <Link
        to="/our-story"
        sx={{
          display: "inline-block",
          color: "accent",
          fontSize: "21px",
          textTransform: "uppercase",
          fontWeight: 700,
          textDecoration: "none",
          mt: ["40px", "50px"],
        }}
      >
        Our story
      </Link>

      {/* <p className="blog-description">{RichText.asText(home.description)}</p> */}
    </Container>
  )
}

export default Hero
